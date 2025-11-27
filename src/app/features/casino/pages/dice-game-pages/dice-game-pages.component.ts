import { Component, OnInit } from '@angular/core';
import { CasinoTicket } from "../../models/casino-ticket.model";
import { DiceData } from "../../models/dice-data.model";
import { HeaderReturnButtonService } from "../../../../core/services/header-return-button.service";
import { CasinoClientService } from "../../services/casino-client-service";
import { ActivatedRoute } from "@angular/router";
import { DataUserService } from "../../../../core/services/data-user.service";
import { forkJoin } from "rxjs";
import { CommonModule } from "@angular/common";
import { DiceGameTemplateComponent } from "../../../../shared/templates/dice-game-template/dice-game-template.component";

@Component({
    selector: 'app-dice-game-pages',
    standalone: true,
    imports: [
        CommonModule,
        DiceGameTemplateComponent
    ],
    templateUrl: './dice-game-pages.component.html',
    styleUrl: './dice-game-pages.component.css'
})
export class DiceGamePagesComponent implements OnInit {
    public casinoTicket!: CasinoTicket;
    public diceData!: DiceData;
    public playError: string = "";
    public dice1: number | null = null;
    public dice2: number | null = null;
    public winnings: number = 0;
    public winMessage: string = "";
    public isRolling: boolean = false;

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
                diceDataRequest: this.casinoService.getDiceData(casinoId),
            }).subscribe({
                next: results => {
                    this.casinoTicket = results.casinoTicketRequest;
                    this.diceData = results.diceDataRequest;
                    this.headerButtonSerivce.updateButton("🎰 Back to the casino", `/casino/${this.casinoTicket.casino.id}/dashboard`);
                }
            });
        });
    }

    playDice(bet: number) {
        if (this.isRolling) return;
        this.isRolling = true;
        this.winMessage = "";
        this.playError = "";

        // Start animation
        const animationInterval = setInterval(() => {
            this.dice1 = Math.floor(Math.random() * 6) + 1;
            this.dice2 = Math.floor(Math.random() * 6) + 1;
        }, 100);

        this.casinoService.playDice(this.casinoTicket.casino.id, bet).subscribe({
            next: results => {
                this.dataUserService.removePlayerMoney(bet);

                // Stop animation after 2 seconds and show real result
                setTimeout(() => {
                    clearInterval(animationInterval);
                    this.dice1 = results.roll[0];
                    this.dice2 = results.roll[1];
                    this.winnings = results.winnings;
                    this.handleResult();
                    this.isRolling = false;
                }, 2000);
            },
            error: err => {
                clearInterval(animationInterval);
                this.isRolling = false;
                this.playError = err.error.message;
            }
        });
    }

    handleResult() {
        if (this.winnings > 0) {
            this.winMessage = `Congratulations! You rolled ${this.dice1! + this.dice2!} and won ${this.winnings.toLocaleString()}€`;
            this.dataUserService.addPlayerMoney(this.winnings);
        } else {
            this.winMessage = `You rolled ${this.dice1! + this.dice2!}. Better luck next time!`;
        }
        this.winnings = 0;
    }
}
