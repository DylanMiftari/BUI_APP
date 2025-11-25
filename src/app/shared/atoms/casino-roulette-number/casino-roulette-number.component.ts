import {Component, Input} from '@angular/core';
import {ThemeColor} from "../../../core/themeColor/theme-color-type";
import {ThemeColorService} from "../../../core/themeColor/theme-color.service";

@Component({
  selector: 'app-casino-roulette-number',
  standalone: true,
  imports: [],
  templateUrl: './casino-roulette-number.component.html',
  styleUrl: './casino-roulette-number.component.css',
  host: {
    '[style.width]': 'size',
    '[style.height]': 'size',
    '[style.border]': '"solid 4px "+colorService.simpleColor(color)',
    '[style.box-shadow]': '"0 0 30px "+colorService.shadowColor(color)'
  }
})
export class CasinoRouletteNumberComponent {
  @Input() number: number = 0;
  @Input() color: ThemeColor = "casino-regular";
  @Input() fontSize: string = "7vw";
  @Input() size: string = "15vw";

  constructor(public colorService: ThemeColorService) {
  }
}
