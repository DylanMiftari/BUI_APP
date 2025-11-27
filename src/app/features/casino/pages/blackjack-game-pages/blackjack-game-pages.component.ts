import { Component, OnInit } from '@angular/core';
import { CasinoTicket } from "../../models/casino-ticket.model";
import { BlackjackData } from "../../models/blackjack-data.model";
import { Card } from "../../models/poker-result.model";
import { HeaderReturnButtonService } from "../../../../core/services/header-return-button.service";
import { CasinoClientService } from "../../services/casino-client-service";
import { ActivatedRoute } from "@angular/router";
import { DataUserService } from "../../../../core/services/data-user.service";
import { forkJoin } from "rxjs";
import { CommonModule } from "@angular/common";
import { BlackjackGameTemplateComponent } from "../../../../shared/templates/blackjack-game-template/blackjack-game-template.component";

@Component({
    selector: 'app-blackjack-game-pages',
    standalone: true,
    imports: [
        CommonModule,
        BlackjackGameTemplateComponent
    ],
    templateUrl: './blackjack-game-pages.component.html',
    styleUrl: './blackjack-game-pages.component.css'
})
export class BlackjackGamePagesComponent implements OnInit {
    public casinoTicket!: CasinoTicket;
    public blackjackData!: BlackjackData;
    public playError: string = "";
    public userHand: Card[] = [];
    public bankHand: Card[] = [];
    public winnings: number = 0;
    public winMessage: string = "";
    public gameState: 'betting' | 'playing' | 'finished' = 'betting';
    public lastBet: number = 0;
    public gameId: number = 0;

    constructor(
        private headerButtonSerivce: HeaderReturnButtonService,
        private casinoService: CasinoClientService,
        private route: ActivatedRoute,
        private dataUserService: DataUserService
    ) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            let casinoId = params['casinoId'];
            forkJoin({
                casinoTicketRequest: this.casinoService.getUserTicket(casinoId),
                blackjackDataRequest: this.casinoService.getBlackjackData(casinoId),
            }).subscribe({
                next: results => {
                    this.casinoTicket = results.casinoTicketRequest;
                    this.blackjackData = results.blackjackDataRequest;
                    this.headerButtonSerivce.updateButton("🎰 Back to the casino", `/casino/${this.casinoTicket.casino.id}/dashboard`);
                }
            });
        });
    }

    playBlackjack(bet: number) {
        this.lastBet = bet;
        this.casinoService.initBlackjack(this.casinoTicket.casino.id, bet).subscribe({
            next: results => {
                this.dataUserService.removePlayerMoney(bet);
                this.gameId = results.id;
                this.userHand = results.userHand;
                this.bankHand = results.bankHand;
                this.gameState = 'playing';
                this.winMessage = "";
                this.playError = "";
            },
            error: err => {
                this.playError = err.error.message;
            }
        });
    }

    hit() {
        this.casinoService.hitBlackjack(this.casinoTicket.casino.id, this.gameId).subscribe({
            next: results => {
                this.userHand = results.userHand;
                this.bankHand = results.bankHand;
                // Check if user busted or if game finished automatically (if API handles it)
                // The API description says hit returns same structure as init.
                // It doesn't explicitly say it returns "handRes" or "winnings" on hit, only on finish.
                // But if the user busts, the server might return a finished state?
                // The user description says: "Le joueur peut aussi décider de finir la partie finish... qui retourne... handRes"
                // It implies explicit finish. But usually if you bust, you bust.
                // I'll assume for now I just update hands. If the user busts, they might need to call finish?
                // Or maybe the API returns "handRes" if they bust on hit?
                // The user didn't specify that hit can return result.
                // I will check if the response has "handRes" just in case, or just let the user hit until they decide to stand or realize they busted.
                // Actually, standard blackjack: if you go over 21, you lose immediately.
                // I'll assume the user has to click Stand to see the result, OR I should check the value myself?
                // Better to rely on the API. If the API doesn't return "handRes" on hit, I'll just update hands.
                // Wait, if I bust, I should probably stop.
                // Let's stick to the described API. Hit updates hands. Stand finishes game.

                // However, if the response contains winnings/handRes (even if not explicitly documented as such for hit), I should handle it.
                // The user said hit returns "C'est en fait le même résultat que pour lancer la partie mais avec une carte de plus".
                // So likely no result info.
            },
            error: err => {
                this.playError = err.error.message;
            }
        });
    }

    stand() {
        this.casinoService.finishBlackjack(this.casinoTicket.casino.id, this.gameId).subscribe({
            next: results => {
                this.userHand = results.userHand;
                this.bankHand = results.bankHand;
                this.winnings = results.winnings || 0;
                this.gameState = 'finished';
                this.handleResult(results.handRes, this.winnings);
            },
            error: err => {
                this.playError = err.error.message;
            }
        });
    }

    handleResult(handRes: string | undefined, winnings: number) {
        switch (handRes) {
            case 'bust':
                this.winMessage = "💥 You busted! Better luck next time.";
                break;
            case 'blackjack':
                this.winMessage = `🎉 BLACKJACK! You won ${winnings.toLocaleString()}€!`;
                break;
            case 'win':
                this.winMessage = `🏆 You won ${winnings.toLocaleString()}€!`;
                break;
            case 'push':
                this.winMessage = "🤝 Push! It's a tie.";
                break;
            case 'lose':
                this.winMessage = "😢 You lost. The dealer had a better hand.";
                break;
            default:
                if (winnings > 0) {
                    this.winMessage = `You won ${winnings.toLocaleString()}€!`;
                } else {
                    this.winMessage = "You lost.";
                }
                break;
        }

        if (winnings > 0) {
            this.dataUserService.addPlayerMoney(winnings);
        }
    }

    resetGame() {
        this.gameState = 'betting';
        this.userHand = [];
        this.bankHand = [];
        this.winMessage = "";
        this.winnings = 0;
    }
}
