import { Component, OnInit } from '@angular/core';
import { CasinoTicket } from "../../models/casino-ticket.model";
import { PokerData } from "../../models/poker-data.model";
import { Card } from "../../models/poker-result.model";
import { HeaderReturnButtonService } from "../../../../core/services/header-return-button.service";
import { CasinoClientService } from "../../services/casino-client-service";
import { ActivatedRoute } from "@angular/router";
import { DataUserService } from "../../../../core/services/data-user.service";
import { forkJoin } from "rxjs";
import { CommonModule } from "@angular/common";
import { PokerGameTemplateComponent } from "../../../../shared/templates/poker-game-template/poker-game-template.component";

@Component({
    selector: 'app-poker-game-pages',
    standalone: true,
    imports: [
        CommonModule,
        PokerGameTemplateComponent
    ],
    templateUrl: './poker-game-pages.component.html',
    styleUrl: './poker-game-pages.component.css'
})
export class PokerGamePagesComponent implements OnInit {
    public casinoTicket!: CasinoTicket;
    public pokerData!: PokerData;
    public playError: string = "";
    public cards: Card[] = [];
    public hiddenCards: boolean[] = [true, true, true, true, true];
    public winnings: number = 0;
    public winMessage: string = "";
    public gameState: 'betting' | 'revealing' | 'finished' = 'betting';
    public handName: string = "";

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
                pokerDataRequest: this.casinoService.getPokerData(casinoId),
            }).subscribe({
                next: results => {
                    this.casinoTicket = results.casinoTicketRequest;
                    this.pokerData = results.pokerDataRequest;
                    this.headerButtonSerivce.updateButton("🎰 Back to the casino", `/casino/${this.casinoTicket.casino.id}/dashboard`);
                }
            });
        });
    }

    playPoker(bet: number) {
        this.casinoService.playPoker(this.casinoTicket.casino.id, bet).subscribe({
            next: results => {
                this.dataUserService.removePlayerMoney(bet);
                this.cards = results.cards;
                this.winnings = results.winnings;
                this.handName = results.hand;
                this.gameState = 'revealing';
                this.hiddenCards = [true, true, true, true, true];
                this.winMessage = "";
                this.playError = "";
            },
            error: err => {
                this.playError = err.error.message;
            }
        });
    }

    revealCard(index: number) {
        this.hiddenCards[index] = false;
        this.checkAllRevealed();
    }

    revealAll() {
        this.hiddenCards = [false, false, false, false, false];
        this.checkAllRevealed();
    }

    checkAllRevealed() {
        if (this.hiddenCards.every(hidden => !hidden)) {
            this.gameState = 'finished';
            this.handleResult();
        }
    }

    handleResult() {
        if (this.winnings > 0) {
            this.winMessage = `Congratulations! You have a ${this.handName} and won ${this.winnings.toLocaleString()}€`;
            this.dataUserService.addPlayerMoney(this.winnings);
        } else {
            this.winMessage = `You have a ${this.handName}. Better luck next time!`;
        }
    }

    resetGame() {
        this.gameState = 'betting';
        this.cards = [];
        this.hiddenCards = [true, true, true, true, true];
        this.winMessage = "";
        this.winnings = 0;
    }
}
