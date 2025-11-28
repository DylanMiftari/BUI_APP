import {Component, Input} from '@angular/core';
import {ThemeColor} from "../../../core/themeColor/theme-color-type";
import {ThemeColorService} from "../../../core/themeColor/theme-color.service";

@Component({
  selector: 'app-roulette2-coin',
  standalone: true,
  imports: [],
  templateUrl: './roulette2-coin.component.html',
  styleUrl: './roulette2-coin.component.css'
})
export class Roulette2CoinComponent {
  @Input() value: number = 0;
  @Input() theme: ThemeColor = "casino-regular";
  @Input() size: number = 60;
  @Input() isSelected: boolean = false;

  constructor(public themeColor: ThemeColorService) {}
}
