import { Component, Input } from '@angular/core';
import { PageTitleComponent } from "../../atoms/page-title/page-title.component";
import { CardComponent } from "../../organisms/card/card.component";
import { RowComponent } from "../../atoms/row/row.component";
import { SubtitleWithIconComponent } from '../../moleculs/subtitle-with-icon/subtitle-with-icon.component';
import { ButtonComponent } from "../../atoms/button/button.component";
import { CardContainerComponent } from "../../atoms/card-container/card-container.component";
import { SimpleCardComponent } from "../../atoms/simple-card/simple-card.component";
import { DataWithTextComponent } from "../../moleculs/data-with-text/data-with-text.component";
import { City } from '../../../features/general/models/city.model';

@Component({
  selector: 'app-city-dashboard-template',
  standalone: true,
  imports: [PageTitleComponent, CardComponent, RowComponent, SubtitleWithIconComponent, ButtonComponent, CardContainerComponent, SimpleCardComponent, DataWithTextComponent],
  templateUrl: './city-dashboard-template.component.html',
  styleUrl: './city-dashboard-template.component.css'
})
export class CityDashboardTemplateComponent {
  @Input() city!: City;
}
