import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Roulette2BoardComponent} from "../../moleculs/roulette2-board/roulette2-board.component";
import {RouletteData} from "../../../features/casino/models/roulette-data.model";
import {CasinoTicket} from "../../../features/casino/models/casino-ticket.model";
import {Roulette2Data} from "../../../features/casino/models/roulette2-data.model";
import {SimpleCardComponent} from "../../atoms/simple-card/simple-card.component";
import {SimpleTextComponent} from "../../atoms/simple-text/simple-text.component";
import {ThemedTitleComponent} from "../../atoms/themed-title/themed-title.component";
import {CardContainerComponent} from "../../atoms/card-container/card-container.component";
import {CasinoPayoutCardComponent} from "../../moleculs/casino-payout-card/casino-payout-card.component";
import {RowComponent} from "../../atoms/row/row.component";
import {Roulette2CoinSelectorComponent} from "../../moleculs/roulette2-coin-selector/roulette2-coin-selector.component";
import {CasinoWheelComponent} from "../../atoms/casino-wheel/casino-wheel.component";
import {Roulette2NumberResultComponent} from "../../atoms/roulette2-number-result/roulette2-number-result.component";
import {ButtonComponent} from "../../atoms/button/button.component";
import {ErrorTextComponent} from "../../atoms/error-text/error-text.component";

@Component({
  selector: 'app-roulette2-game-template',
  standalone: true,
  imports: [
    Roulette2BoardComponent,
    SimpleCardComponent,
    SimpleTextComponent,
    ThemedTitleComponent,
    CardContainerComponent,
    CasinoPayoutCardComponent,
    RowComponent,
    Roulette2CoinSelectorComponent,
    CasinoWheelComponent,
    Roulette2NumberResultComponent,
    ButtonComponent,
    ErrorTextComponent
  ],
  templateUrl: './roulette2-game-template.component.html',
  styleUrl: './roulette2-game-template.component.css'
})
export class Roulette2GameTemplateComponent {
  @Input() public roulette2Data!: Roulette2Data;
  @Input() public casinoTicket!: CasinoTicket;
  @Input() rolledNumber: number | null = null;
  @Input() winText: string = "";
  @Input() errorText: string = "";

  @Output() onClickOnSpin = new EventEmitter<any>();

  public coinValues: number[] = [-1, -10, -50, -100, -1000, 1, 5, 10, 50, 100, 1000];
  public selectedValue: number = 1;
  public betArray: any = {};

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
  get maxBet() {
    return this.casinoTicket.isVIP ? this.roulette2Data.vipMaxBet : this.roulette2Data.maxBet;
  }

  get totalOfBet() {
    let res = 0;
    for(let betElement of Object.values(this.betArray) as any[]) {
      res += (Object.values(betElement) as number[]).reduce((acc, cur) => acc + cur, 0);
    }
    return res;
  }

  selectCoinValue(value: number) {
    this.selectedValue = value;
  }

  updateBetArray(betArray: any) {
    this.betArray = betArray;
  }

  sendBetArray() {
    let splitedBet = ["split", "street", "corner", "sixline"];

    let res = {"bet": {} as Record<string, any>};
    for(let betType of Object.keys(this.betArray)) {
      if(betType == "straight_up" && Object.keys(this.betArray[betType]).length > 0) {
        res["bet"]["straight_up"] = [];
        for(let betNumber of Object.keys(this.betArray[betType])) {
          res["bet"]["straight_up"].push({"bet": this.betArray[betType][betNumber], "number": betNumber})
        }
      }
      if(splitedBet.indexOf(betType) != -1 && Object.keys(this.betArray[betType]).length > 0) {
        res["bet"][betType] = [];
        for(let betNumber of Object.keys(this.betArray[betType])) {
          res["bet"][betType].push({"bet": this.betArray[betType][betNumber], "numbers": betNumber.split("-")})
        }
      }
      if(betType == "red_black" || betType == "odd_even") {
        res["bet"][betType] = [];
        for(let betName of Object.keys(this.betArray[betType])) {
          res["bet"][betType].push({"bet": this.betArray[betType][betName], "bet_name": betName})
        }
      }
      if(betType == "column") {
        res["bet"][betType] = [];
        for(let betName of Object.keys(this.betArray[betType])) {
          res["bet"][betType].push({"bet": this.betArray[betType][betName], "column_number": betName})
        }
      }
      if(betType == "dozen") {
        res["bet"][betType] = [];
        for(let betName of Object.keys(this.betArray[betType])) {
          res["bet"][betType].push({"bet": this.betArray[betType][betName], "dozen_number": betName})
        }
      }
      if(betType == "middle") {
        res["bet"][betType] = [];
        for(let betName of Object.keys(this.betArray[betType])) {
          res["bet"][betType].push({"bet": this.betArray[betType][betName], "part_number": betName})
        }
      }
    }

    this.onClickOnSpin.emit(res);
  }
}
