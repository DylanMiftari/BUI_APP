import {Component, EventEmitter, Input, Output} from '@angular/core';
import {City} from "../../../features/general/models/city.model";
import {CardComponent} from "../card/card.component";
import {RowComponent} from "../../atoms/row/row.component";
import {SimpleTextComponent} from "../../atoms/simple-text/simple-text.component";
import {PinComponent} from "../../atoms/pin/pin.component";
import {CityFlagComponent} from "../../atoms/city-flag/city-flag.component";
import {CardContainerComponent} from "../../atoms/card-container/card-container.component";
import {SimpleCardComponent} from "../../atoms/simple-card/simple-card.component";
import {DataWithTextComponent} from "../../moleculs/data-with-text/data-with-text.component";
import {ButtonComponent} from "../../atoms/button/button.component";

@Component({
  selector: 'app-travel-city-card',
  standalone: true,
  imports: [
    CardComponent,
    RowComponent,
    SimpleTextComponent,
    PinComponent,
    CityFlagComponent,
    CardContainerComponent,
    SimpleCardComponent,
    DataWithTextComponent,
    ButtonComponent
  ],
  templateUrl: './travel-city-card.component.html',
  styleUrl: './travel-city-card.component.css'
})
export class TravelCityCardComponent {
  @Input() city!: City;
  @Output() travel = new EventEmitter<City>();

  onClickOnButton() {
    this.travel.emit(this.city);
  }
}
