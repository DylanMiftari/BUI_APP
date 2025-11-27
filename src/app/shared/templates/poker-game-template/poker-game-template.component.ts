import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PokerData } from "../../../features/casino/models/poker-data.model";
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
    selector: 'app-poker-game-template',
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
    templateUrl: './poker-game-template.component.html',
    styleUrl: './poker-game-template.component.css'
})
export class PokerGameTemplateComponent {
    @Input() public pokerData!: PokerData;
    @Input() public casinoTicket!: CasinoTicket;
    @Input() public playError: string = "";
    @Input() public cards: Card[] = [];
    @Input() public hiddenCards: boolean[] = [true, true, true, true, true];
    @Input() public winMessage: string = "";
    @Input() public gameState: 'betting' | 'revealing' | 'finished' = 'betting';

    @Output() public launchPoker = new EventEmitter<number>();
    @Output() public revealCard = new EventEmitter<number>();
    @Output() public revealAllCards = new EventEmitter<void>();
    @Output() public playAgain = new EventEmitter<void>();

    get theme() {
        return this.casinoTicket.isVIP ? "casino-vip" : "casino-regular";
    }

    get maxBet() {
        return this.casinoTicket.isVIP ? this.pokerData.maxVIPBet : this.pokerData.maxBet;
    }

    getMultiplicator(handType: string): number {
        if (this.casinoTicket.isVIP) {
            switch (handType) {
                case 'royalFlush': return this.pokerData.royalFlushVIPMultiplicator;
                case 'straightFlush': return this.pokerData.straightFlushVIPMultiplicator;
                case 'fourOfAKind': return this.pokerData.fourOfAKindVIPMultiplicator;
                case 'fullHouse': return this.pokerData.fullHouseVIPMultiplicator;
                case 'flush': return this.pokerData.flushVIPMultiplicator;
                case 'straight': return this.pokerData.straightVIPMultiplicator;
                case 'threeOfAKind': return this.pokerData.threeOfAKindVIPMultiplicator;
                case 'twoPair': return this.pokerData.twoPairVIPMultiplicator;
                case 'onePair': return this.pokerData.onePairVIPMultiplicator;
                case 'nothing': return this.pokerData.nothingVIPMultiplicator;
                default: return 0;
            }
        } else {
            switch (handType) {
                case 'royalFlush': return this.pokerData.royalFlushMultiplicator;
                case 'straightFlush': return this.pokerData.straightFlushMultiplicator;
                case 'fourOfAKind': return this.pokerData.fourOfAKindMultiplicator;
                case 'fullHouse': return this.pokerData.fullHouseMultiplicator;
                case 'flush': return this.pokerData.flushMultiplicator;
                case 'straight': return this.pokerData.straightMultiplicator;
                case 'threeOfAKind': return this.pokerData.threeOfAKindMultiplicator;
                case 'twoPair': return this.pokerData.twoPairMultiplicator;
                case 'onePair': return this.pokerData.onePairMultiplicator;
                case 'nothing': return this.pokerData.nothingMultiplicator;
                default: return 0;
            }
        }
    }

    playerPlayGame(data: any) {
        this.launchPoker.emit(data["bet"]);
    }

    onCardClick(index: number) {
        if (this.gameState === 'revealing' && this.hiddenCards[index]) {
            this.revealCard.emit(index);
        }
    }

    revealAll() {
        this.revealAllCards.emit();
    }

    resetGame() {
        this.playAgain.emit();
    }
}
