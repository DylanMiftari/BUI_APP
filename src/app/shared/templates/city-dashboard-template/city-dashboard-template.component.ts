import {Component, EventEmitter, Input, Output} from '@angular/core';
import { PageTitleComponent } from "../../atoms/page-title/page-title.component";
import { CardComponent } from "../../organisms/card/card.component";
import { RowComponent } from "../../atoms/row/row.component";
import { SubtitleWithIconComponent } from '../../moleculs/subtitle-with-icon/subtitle-with-icon.component';
import { ButtonComponent } from "../../atoms/button/button.component";
import { CardContainerComponent } from "../../atoms/card-container/card-container.component";
import { SimpleCardComponent } from "../../atoms/simple-card/simple-card.component";
import { DataWithTextComponent } from "../../moleculs/data-with-text/data-with-text.component";
import { City } from '../../../features/general/models/city.model';
import {InputComponent} from "../../atoms/input/input.component";
import {CompanyFilterFormComponent} from "../../organisms/company-filter-form/company-filter-form.component";
import {Company} from "../../../features/general/models/company.model";
import {CompanyListComponent} from "../../organisms/company-list/company-list.component";

@Component({
  selector: 'app-city-dashboard-template',
  standalone: true,
  imports: [PageTitleComponent, CardComponent, RowComponent, SubtitleWithIconComponent, ButtonComponent, CardContainerComponent, SimpleCardComponent, DataWithTextComponent, InputComponent, CompanyFilterFormComponent, CompanyListComponent],
  templateUrl: './city-dashboard-template.component.html',
  styleUrl: './city-dashboard-template.component.css'
})
export class CityDashboardTemplateComponent {
  @Input() city!: City;
  @Input() companies: Company[] = [];
  @Output() sendCompanyFilter = new EventEmitter<{
    companyName: string|null,
    companyType: string|null,
    companyLevel: number|null,
  }>();

  onFilterCompanies(data: any) {
    this.sendCompanyFilter.emit({
      companyName: data.companyName,
      companyType: data.companyType,
      companyLevel: data.companyLevel,
    });
  }
}
