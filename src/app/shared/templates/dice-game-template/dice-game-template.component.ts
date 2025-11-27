import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DiceData } from "../../../features/casino/models/dice-data.model";
import { CasinoTicket } from "../../../features/casino/models/casino-ticket.model";
import { SimpleCardComponent } from "../../atoms/simple-card/simple-card.component";
import { ThemedTitleComponent } from "../../atoms/themed-title/themed-title.component";
import { SimpleTextComponent } from "../../atoms/simple-text/simple-text.component";
import { CardContainerComponent } from "../../atoms/card-container/card-container.component";
import { CasinoPayoutCardComponent } from "../../moleculs/casino-payout-card/casino-payout-card.component";
import { CasinoBetFormComponent } from "../../organisms/casino-bet-form/casino-bet-form.component";
import { ErrorTextComponent } from "../../atoms/error-text/error-text.component";
import { CasinoDiceComponent } from "../../atoms/casino-dice/casino-dice.component";

@Component({
    selector: 'app-dice-game-template',
    standalone: true,
    imports: [
        SimpleCardComponent,
        ThemedTitleComponent,
        SimpleTextComponent,
        CardContainerComponent,
        CasinoPayoutCardComponent,
        CasinoBetFormComponent,
        ErrorTextComponent,
        CasinoDiceComponent
    ],
    templateUrl: './dice-game-template.component.html',
    styleUrl: './dice-game-template.component.css'
})
export class DiceGameTemplateComponent {
    @Input() public diceData!: DiceData;
    @Input() public casinoTicket!: CasinoTicket;
    @Input() public playError: string = "";
    @Input() public dice1: number | null = null;
    @Input() public dice2: number | null = null;
    @Input() public winMessage: string = "";

    @Output() public launchDice = new EventEmitter<number>();

    get theme() {
        return this.casinoTicket.isVIP ? "casino-vip" : "casino-regular";
    }

    get winMultiplicator() {
        return this.casinoTicket.isVIP ? this.diceData.vipWinMultiplicator : this.diceData.winMultiplicator;
    }

    get goal() {
        return this.casinoTicket.isVIP ? this.diceData.vipGoal : this.diceData.goal;
    }

    get maxBet() {
        return this.casinoTicket.isVIP ? this.diceData.vipMaxBet : this.diceData.maxBet;
    }

    playerPlayGame(data: any) {
        this.launchDice.emit(data["bet"]);
    }
}
