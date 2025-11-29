import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Roulette2NumberComponent} from "../../atoms/roulette2-number/roulette2-number.component";
import {NgClass} from "@angular/common";
import {Roulette2CoinComponent} from "../../atoms/roulette2-coin/roulette2-coin.component";
import {ThemeColor} from "../../../core/themeColor/theme-color-type";

@Component({
  selector: 'app-roulette2-board',
  standalone: true,
  imports: [
    Roulette2NumberComponent,
    NgClass,
    Roulette2CoinComponent
  ],
  templateUrl: './roulette2-board.component.html',
  styleUrl: './roulette2-board.component.css'
})
export class Roulette2BoardComponent {
  @Input() caseSize: number = 60;
  @Input() selectedCoinValue: number = 1;
  @Input() theme: ThemeColor = "casino-regular";
  @Output() onBetArrayChange = new EventEmitter<any>();
  public NUMBERS: number[] = Array.from({ length: 37 }, (_, i) => i);
  public RED_NUMBERS: number[] = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];
  public BLACK_NUMBERS: number[] = [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35];

  public EVEN_NUMBERS: number[] = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36];
  public ODD_NUMBERS: number[] = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35];

  public FIRST_COL: number[] = [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34];
  public SECOND_COL: number[] = [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35];
  public THIRD_COL: number[] = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36];

  public selectedNumbers: number[] = [];

  public betArray = {
    "straight_up": {} as Record<number, number>,
    "middle": {
      0: 0,
      1: 0
    } as Record<number, number>,
    "odd_even": {
      "odd": 0,
      "even": 0
    } as Record<string, number>,
    "red_black": {
      "red": 0,
      "black": 0
    } as Record<string, number>,
    "dozen": {
      0: 0,
      1: 0,
      2: 0,
    } as Record<number, number>,
    "column": {
      0: 0,
      1: 0,
      2: 0,
    } as Record<number, number>,
    "split": {} as Record<string, number>,
    "street": {} as Record<string, number>,
    "sixline": {} as Record<string, number>,
    "corner": {} as Record<string, number>,
  };

  setSelectedNumbers(numbers: number[]) {
    this.selectedNumbers = numbers;
  }

  getNumbersRange(start: number, end: number): number[] {
    const length = end - start + 1;
    return Array.from({ length: length }, (_, i) => i + start);
  }

  addOnStraightUp(number: number): void {
    if(this.betArray["straight_up"].hasOwnProperty(number)) {
      this.betArray["straight_up"][number] += this.selectedCoinValue;
    } else {
      this.betArray["straight_up"][number] = this.selectedCoinValue;
    }
    if(this.betArray["straight_up"][number] < 0) {
      this.betArray["straight_up"][number] = 0;
    }
    this.onBetArrayChange.emit(this.betArray);
  }
  addOnMiddle(part: number): void {
    this.betArray["middle"][part] += this.selectedCoinValue;
    if(this.betArray["middle"][part] < 0) {
      this.betArray["middle"][part] = 0;
    }
    this.onBetArrayChange.emit(this.betArray);
  }
  addOddOrEven(betName: string): void {
    this.betArray["odd_even"][betName] += this.selectedCoinValue;
    if(this.betArray["odd_even"][betName] < 0) {
      this.betArray["odd_even"][betName] = 0;
    }
    this.onBetArrayChange.emit(this.betArray);
  }
  addRedOrBlack(betName: string): void {
    this.betArray["red_black"][betName] += this.selectedCoinValue;
    if(this.betArray["red_black"][betName] < 0) {
      this.betArray["red_black"][betName] = 0;
    }
    this.onBetArrayChange.emit(this.betArray);
  }
  addDozen(dozenNumber: number): void {
    this.betArray["dozen"][dozenNumber] += this.selectedCoinValue;
    if(this.betArray["dozen"][dozenNumber] < 0) {
      this.betArray["dozen"][dozenNumber] = 0;
    }
    this.onBetArrayChange.emit(this.betArray);
  }
  addColumn(columnNumber: number): void {
    this.betArray["column"][columnNumber] += this.selectedCoinValue;
    if(this.betArray["column"][columnNumber] < 0) {
      this.betArray["column"][columnNumber] = 0;
    }
    this.onBetArrayChange.emit(this.betArray);
  }
  addSplit(key: string): void {
    if(this.betArray["split"].hasOwnProperty(key)) {
      this.betArray["split"][key] += this.selectedCoinValue;
    } else {
      this.betArray["split"][key] = this.selectedCoinValue;
    }
    if(this.betArray["split"][key] < 0) {
      this.betArray["split"][key] = 0;
    }
    this.onBetArrayChange.emit(this.betArray);
  }
  addStreet(key: string): void {
    if(this.betArray["street"].hasOwnProperty(key)) {
      this.betArray["street"][key] += this.selectedCoinValue;
    } else {
      this.betArray["street"][key] = this.selectedCoinValue;
    }
    if(this.betArray["street"][key] < 0) {
      this.betArray["street"][key] = 0;
    }
    this.onBetArrayChange.emit(this.betArray);
  }
  addSixLine(key: string): void {
    if(this.betArray["sixline"].hasOwnProperty(key)) {
      this.betArray["sixline"][key] += this.selectedCoinValue;
    } else {
      this.betArray["sixline"][key] = this.selectedCoinValue;
    }
    if(this.betArray["sixline"][key] < 0) {
      this.betArray["sixline"][key] = 0;
    }
    this.onBetArrayChange.emit(this.betArray);
  }
  addCorner(key: string): void {
    if(this.betArray["corner"].hasOwnProperty(key)) {
      this.betArray["corner"][key] += this.selectedCoinValue;
    } else {
      this.betArray["corner"][key] = this.selectedCoinValue;
    }
    if(this.betArray["corner"][key] < 0) {
      this.betArray["corner"][key] = 0;
    }
    this.onBetArrayChange.emit(this.betArray);
  }
}
