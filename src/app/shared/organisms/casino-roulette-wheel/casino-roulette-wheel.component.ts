import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {CasinoRouletteSpinComponent} from "../../moleculs/casino-roulette-spin/casino-roulette-spin.component";
import {ThemeColor} from "../../../core/themeColor/theme-color-type";

@Component({
  selector: 'app-casino-roulette-wheel',
  standalone: true,
  imports: [
    CasinoRouletteSpinComponent
  ],
  templateUrl: './casino-roulette-wheel.component.html',
  styleUrl: './casino-roulette-wheel.component.css'
})
export class CasinoRouletteWheelComponent implements OnChanges{
  @Input() public color: ThemeColor = "casino-regular";
  @Input() public state: string = "wait";
  @Input() public goodNumbers: number[]|null[] = [null, null, null];

  @Output() public playerStopAllSpins = new EventEmitter();
  public numbers: number[] = [0, 0, 0];
  public intervals: any = [null, null, null];

  private nbWheelStoped: number = 0;

  constructor() {

  }

  ngOnChanges(changes: SimpleChanges) {
    if(this.state == 'random') {
      this.intervals[0] = setInterval(() => {
        this.numbers[0] = Math.round(Math.random()*9);
      }, 100);
      this.intervals[1] = setInterval(() => {
        this.numbers[1] = Math.round(Math.random()*9);
      }, 50);
      this.intervals[2] = setInterval(() => {
        this.numbers[2] = Math.round(Math.random()*9);
      }, 25);

      this.nbWheelStoped = 0;
    }
  }

  stopWheel(wheelNumber: number) {
    if(this.goodNumbers[wheelNumber] != null) {
      clearInterval(this.intervals[wheelNumber]);
      this.numbers[wheelNumber] = this.goodNumbers[wheelNumber]!;
      this.nbWheelStoped++;
      if(this.nbWheelStoped == 3) {
        this.playerStopAllSpins.emit();
      }
    }
  }
}
