import {Component, Input} from '@angular/core';
import {TravelData} from "../../../features/general/models/travel-data.model";
import {PageTitleComponent} from "../../atoms/page-title/page-title.component";
import {TitleComponent} from "../../atoms/title/title.component";
import {CardComponent} from "../../organisms/card/card.component";
import {SimpleTextComponent} from "../../atoms/simple-text/simple-text.component";
import {RowComponent} from "../../atoms/row/row.component";
import {CityFlagComponent} from "../../atoms/city-flag/city-flag.component";
import {PinComponent} from "../../atoms/pin/pin.component";
import {CardContainerComponent} from "../../atoms/card-container/card-container.component";
import {TravelCityCardComponent} from "../../organisms/travel-city-card/travel-city-card.component";

@Component({
  selector: 'app-travel-dashboard-templates',
  standalone: true,
  imports: [
    PageTitleComponent,
    TitleComponent,
    CardComponent,
    SimpleTextComponent,
    RowComponent,
    CityFlagComponent,
    PinComponent,
    CardContainerComponent,
    TravelCityCardComponent
  ],
  templateUrl: './travel-dashboard-templates.component.html',
  styleUrl: './travel-dashboard-templates.component.css'
})
export class TravelDashboardTemplatesComponent {
  @Input() travelData!: TravelData;
}
