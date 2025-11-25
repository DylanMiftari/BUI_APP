import {Component, Input} from '@angular/core';
import {IconComponent} from "../../atoms/icon/icon.component";
import {SimpleCardComponent} from "../../atoms/simple-card/simple-card.component";
import {SimpleTextComponent} from "../../atoms/simple-text/simple-text.component";
import {ThemeColor} from "../../../core/themeColor/theme-color-type";

@Component({
  selector: 'app-casino-payout-card',
  standalone: true,
  imports: [
    IconComponent,
    SimpleCardComponent,
    SimpleTextComponent
  ],
  templateUrl: './casino-payout-card.component.html',
  styleUrl: './casino-payout-card.component.css'
})
export class CasinoPayoutCardComponent {
  @Input() public theme: ThemeColor = "casino-regular";
  @Input() public icon!: string;
  @Input() public title!: string;
  @Input() public text!: string;
  @Input() public multiplicator!: number;
}
