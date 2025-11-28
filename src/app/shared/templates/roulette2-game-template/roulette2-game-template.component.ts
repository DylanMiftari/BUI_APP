import {Component, Input} from '@angular/core';
import {Roulette2BoardComponent} from "../../moleculs/roulette2-board/roulette2-board.component";
import {RouletteData} from "../../../features/casino/models/roulette-data.model";
import {CasinoTicket} from "../../../features/casino/models/casino-ticket.model";
import {Roulette2Data} from "../../../features/casino/models/roulette2-data.model";
import {SimpleCardComponent} from "../../atoms/simple-card/simple-card.component";
import {SimpleTextComponent} from "../../atoms/simple-text/simple-text.component";
import {ThemedTitleComponent} from "../../atoms/themed-title/themed-title.component";
import {CardContainerComponent} from "../../atoms/card-container/card-container.component";
import {CasinoPayoutCardComponent} from "../../moleculs/casino-payout-card/casino-payout-card.component";

@Component({
  selector: 'app-roulette2-game-template',
  standalone: true,
  imports: [
    Roulette2BoardComponent,
    SimpleCardComponent,
    SimpleTextComponent,
    ThemedTitleComponent,
    CardContainerComponent,
    CasinoPayoutCardComponent
  ],
  templateUrl: './roulette2-game-template.component.html',
  styleUrl: './roulette2-game-template.component.css'
})
export class Roulette2GameTemplateComponent {
  @Input() public roulette2Data!: Roulette2Data;
  @Input() public casinoTicket!: CasinoTicket;

  get theme() {
    return this.casinoTicket.isVIP ? "casino-vip" : "casino-regular";
  }

  get straightUpMultiplicator() {
    return this.casinoTicket.isVIP ? this.roulette2Data.vipStraightUpMultiplicator : this.roulette2Data.straightUpMultiplicator;
  }
  get splitMultiplicator() {
    return this.casinoTicket.isVIP ? this.roulette2Data.vipSplitMultiplicator : this.roulette2Data.splitMultiplicator;
  }
  get streetMultiplicator() {
    return this.casinoTicket.isVIP ? this.roulette2Data.vipStreetMultiplicator : this.roulette2Data.streetMultiplicator;
  }
  get cornerMultiplicator() {
    return this.casinoTicket.isVIP ? this.roulette2Data.vipCornerMultiplicator : this.roulette2Data.cornerMultiplicator;
  }
  get sixLineMultiplicator() {
    return this.casinoTicket.isVIP ? this.roulette2Data.vipSixLineMultiplicator : this.roulette2Data.sixLineMultiplicator;
  }
  get dozenMultiplicator() {
    return this.casinoTicket.isVIP ? this.roulette2Data.vipDozenMultiplicator : this.roulette2Data.dozenMultiplicator;
  }
  get columnMultiplicator() {
    return this.casinoTicket.isVIP ? this.roulette2Data.vipColumnMultiplicator : this.roulette2Data.columnMultiplicator;
  }
  get redOrBlackMultiplicator() {
    return this.casinoTicket.isVIP ? this.roulette2Data.vipRedBlackMultiplicator : this.roulette2Data.redBlackMultiplicator;
  }
  get oddOrEvenMultiplicator() {
    return this.casinoTicket.isVIP ? this.roulette2Data.vipOddEvenMultiplicator : this.roulette2Data.oddEvenMultiplicator;
  }
  get middleMultiplicator() {
    return this.casinoTicket.isVIP ? this.roulette2Data.vipMiddleMultiplicator : this.roulette2Data.middleMultiplicator;
  }
}
