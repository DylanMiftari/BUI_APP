import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ThemeColor} from "../../../core/themeColor/theme-color-type";
import {Roulette2CoinComponent} from "../../atoms/roulette2-coin/roulette2-coin.component";
import {RowComponent} from "../../atoms/row/row.component";

@Component({
  selector: 'app-roulette2-coin-selector',
  standalone: true,
  imports: [
    Roulette2CoinComponent,
    RowComponent
  ],
  templateUrl: './roulette2-coin-selector.component.html',
  styleUrl: './roulette2-coin-selector.component.css'
})
export class Roulette2CoinSelectorComponent {
  @Input() coinValues!: number[];
  @Input() theme: ThemeColor = "casino-regular"
  @Output() onSelectValue = new EventEmitter<number>();
  @Input() selectedValue: number|null = null;

  selectValue(value: number) {
    this.selectedValue = value;
    this.onSelectValue.emit(value);
  }
}
