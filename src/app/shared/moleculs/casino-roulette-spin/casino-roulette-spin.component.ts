import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ThemeColor} from "../../../core/themeColor/theme-color-type";
import {SimpleTextComponent} from "../../atoms/simple-text/simple-text.component";
import {CasinoRouletteNumberComponent} from "../../atoms/casino-roulette-number/casino-roulette-number.component";
import {ButtonComponent} from "../../atoms/button/button.component";

@Component({
  selector: 'app-casino-roulette-spin',
  standalone: true,
  imports: [
    SimpleTextComponent,
    CasinoRouletteNumberComponent,
    ButtonComponent
  ],
  templateUrl: './casino-roulette-spin.component.html',
  styleUrl: './casino-roulette-spin.component.css'
})
export class CasinoRouletteSpinComponent {
  @Input() number: number = 0;
  @Input() color: ThemeColor = "casino-regular";
  @Input() numberPosition: string = "First";

  @Output() clickOnStop = new EventEmitter<void>();

  stopSpin() {
    this.clickOnStop.emit();
  }
}
