import {Component, Input} from '@angular/core';
import {SimpleCardComponent} from "../../atoms/simple-card/simple-card.component";
import {ThemeColor} from "../../../core/themeColor/theme-color-type";
import {LevelPinComponent} from "../../atoms/level-pin/level-pin.component";
import {CardContainerComponent} from "../../atoms/card-container/card-container.component";
import {CardComponent} from "../../organisms/card/card.component";
import {SimpleTextComponent} from "../../atoms/simple-text/simple-text.component";
import {RowComponent} from "../../atoms/row/row.component";
import {PinComponent} from "../../atoms/pin/pin.component";

@Component({
  selector: 'app-company-level-benefits-card',
  standalone: true,
  imports: [
    SimpleCardComponent,
    LevelPinComponent,
    CardContainerComponent,
    CardComponent,
    SimpleTextComponent,
    RowComponent,
    PinComponent
  ],
  templateUrl: './company-level-benefits-card.component.html',
  styleUrl: './company-level-benefits-card.component.css'
})
export class CompanyLevelBenefitsCardComponent {
  @Input() theme: ThemeColor = "casino";
  @Input() level!: number;
  @Input() levelBenefits!: string[];
  @Input() isCurrent: boolean = false;
}
