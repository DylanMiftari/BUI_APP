import {Component, Input} from '@angular/core';
import {City} from "../../../features/general/models/city.model";
import {IconComponent} from "../icon/icon.component";
import {cityConfig} from "../../../core/config/city.config";

@Component({
  selector: 'app-city-flag',
  standalone: true,
  imports: [
    IconComponent
  ],
  templateUrl: './city-flag.component.html',
  styleUrl: './city-flag.component.css'
})
export class CityFlagComponent {
  @Input() city!: City;
  @Input() fontSize: number = 2;
  protected readonly cityConfig = cityConfig;
}
