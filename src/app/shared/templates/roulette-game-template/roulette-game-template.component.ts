import {Component, EventEmitter, Input, Output} from '@angular/core';
import {RouletteData} from "../../../features/casino/models/roulette-data.model";
import {CasinoTicket} from "../../../features/casino/models/casino-ticket.model";
import {SimpleCardComponent} from "../../atoms/simple-card/simple-card.component";
import {ThemedTitleComponent} from "../../atoms/themed-title/themed-title.component";
import {SimpleTextComponent} from "../../atoms/simple-text/simple-text.component";
import {CardContainerComponent} from "../../atoms/card-container/card-container.component";
import {IconComponent} from "../../atoms/icon/icon.component";
import {CasinoPayoutCardComponent} from "../../moleculs/casino-payout-card/casino-payout-card.component";
import {CasinoRouletteNumberComponent} from "../../atoms/casino-roulette-number/casino-roulette-number.component";
import {CasinoRouletteSpinComponent} from "../../moleculs/casino-roulette-spin/casino-roulette-spin.component";
import {CasinoRouletteWheelComponent} from "../../organisms/casino-roulette-wheel/casino-roulette-wheel.component";
import {CasinoBetFieldsComponent} from "../../moleculs/casino-bet-fields/casino-bet-fields.component";
import {CasinoBetFormComponent} from "../../organisms/casino-bet-form/casino-bet-form.component";
import {ErrorTextComponent} from "../../atoms/error-text/error-text.component";

@Component({
  selector: 'app-roulette-game-template',
  standalone: true,
  imports: [
    SimpleCardComponent,
    ThemedTitleComponent,
    SimpleTextComponent,
    CardContainerComponent,
    IconComponent,
    CasinoPayoutCardComponent,
    CasinoRouletteNumberComponent,
    CasinoRouletteSpinComponent,
    CasinoRouletteWheelComponent,
    CasinoBetFieldsComponent,
    CasinoBetFormComponent,
    ErrorTextComponent
  ],
  templateUrl: './roulette-game-template.component.html',
  styleUrl: './roulette-game-template.component.css'
})
export class RouletteGameTemplateComponent {
  @Input() public rouletteData!: RouletteData;
  @Input() public casinoTicket!: CasinoTicket;
  @Input() public playError: string = "";
  @Input() public rouletteState: string = "wait";
  @Input() public goodNumbers: number[]|null[] = [null, null, null]
  @Input() public winMessage: string = ""

  @Output() public launchRoulette = new EventEmitter<number>();
  @Output() public playerStopAllSpins = new EventEmitter();

  get theme() {
    return this.casinoTicket.isVIP ? "casino-vip" : "casino-regular";
  }

  get sequenceMultiplicator() {
    return this.casinoTicket.isVIP ? this.rouletteData.sequenceVIPMultiplicator : this.rouletteData.sequenceMultiplicator;
  }
  get tripletMultiplicator() {
    return this.casinoTicket.isVIP ? this.rouletteData.tripletVIPMultiplicator : this.rouletteData.tripletMultiplicator;
  }
  get triple7Multiplicator() {
    return this.casinoTicket.isVIP ? this.rouletteData.tripleSevenVIPMultiplicator : this.rouletteData.tripleSevenMultiplicator;
  }

  playerPlayGame(data: any) {
    this.launchRoulette.emit(data["bet"]);
  }
  playHasStopAll() {
    this.playerStopAllSpins.emit();
  }
}
