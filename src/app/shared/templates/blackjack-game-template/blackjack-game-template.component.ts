import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BlackjackData } from "../../../features/casino/models/blackjack-data.model";
import { CasinoTicket } from "../../../features/casino/models/casino-ticket.model";
import { Card } from "../../../features/casino/models/poker-result.model";
import { SimpleCardComponent } from "../../atoms/simple-card/simple-card.component";
import { ThemedTitleComponent } from "../../atoms/themed-title/themed-title.component";
import { SimpleTextComponent } from "../../atoms/simple-text/simple-text.component";
import { CardContainerComponent } from "../../atoms/card-container/card-container.component";
import { CasinoPayoutCardComponent } from "../../moleculs/casino-payout-card/casino-payout-card.component";
import { CasinoBetFormComponent } from "../../organisms/casino-bet-form/casino-bet-form.component";
import { ErrorTextComponent } from "../../atoms/error-text/error-text.component";
import { CasinoCardComponent } from "../../atoms/casino-card/casino-card.component";
import { CommonModule } from "@angular/common";
import { ButtonComponent } from "../../atoms/button/button.component";

@Component({
    selector: 'app-blackjack-game-template',
    standalone: true,
    imports: [
        CommonModule,
        SimpleCardComponent,
        ThemedTitleComponent,
        SimpleTextComponent,
        CardContainerComponent,
        CasinoPayoutCardComponent,
        CasinoBetFormComponent,
        ErrorTextComponent,
        CasinoCardComponent,
        ButtonComponent
    ],
    templateUrl: './blackjack-game-template.component.html',
    styleUrl: './blackjack-game-template.component.css'
})
export class BlackjackGameTemplateComponent {
    @Input() public blackjackData!: BlackjackData;
    @Input() public casinoTicket!: CasinoTicket;
    @Input() public playError: string = "";
    @Input() public userHand: Card[] = [];
    @Input() public bankHand: Card[] = [];
    @Input() public winMessage: string = "";
    @Input() public gameState: 'betting' | 'playing' | 'finished' = 'betting';
    @Input() public lastBet: number = 0;

    @Output() public launchBlackjack = new EventEmitter<number>();
    @Output() public hit = new EventEmitter<void>();
    @Output() public stand = new EventEmitter<void>();
    @Output() public playAgain = new EventEmitter<void>();

    get theme() {
        return this.casinoTicket.isVIP ? "casino-vip" : "casino-regular";
    }

    get maxBet() {
        return this.casinoTicket.isVIP ? this.blackjackData.vipMaxBet : this.blackjackData.maxBet;
    }

    getMultiplicator(type: string): number {
        if (this.casinoTicket.isVIP) {
            switch (type) {
                case 'blackjack': return this.blackjackData.vipBlackjackMultiplicator;
                case 'win': return this.blackjackData.vipWinMultiplicator;
                default: return 0;
            }
        } else {
            switch (type) {
                case 'blackjack': return this.blackjackData.blackjackMultiplicator;
                case 'win': return this.blackjackData.winMultiplicator;
                default: return 0;
            }
        }
    }

    playerPlayGame(data: any) {
        this.launchBlackjack.emit(data["bet"]);
    }

    onHit() {
        this.hit.emit();
    }

    onStand() {
        this.stand.emit();
    }

    resetGame() {
        this.playAgain.emit();
    }

    calculateHandValue(hand: Card[]): number {
        let value = 0;
        let aces = 0;

        for (const card of hand) {
            if (card.value === 1) {
                aces++;
                value += 11;
            } else if (card.value >= 10) {
                value += 10;
            } else {
                value += card.value;
            }
        }

        while (value > 21 && aces > 0) {
            value -= 10;
            aces--;
        }

        return value;
    }
}
