import {Component, Input} from '@angular/core';
import {Company} from "../../../features/general/models/company.model";
import {CardContainerComponent} from "../../atoms/card-container/card-container.component";
import {SimpleCardComponent} from "../../atoms/simple-card/simple-card.component";
import {ThemeColor} from "../../../core/themeColor/theme-color-type";
import {RowComponent} from "../../atoms/row/row.component";
import {SimpleTextComponent} from "../../atoms/simple-text/simple-text.component";
import {companyConfig} from "../../../core/config/company.config";
import {LevelPinComponent} from "../../atoms/level-pin/level-pin.component";

@Component({
  selector: 'app-company-list',
  standalone: true,
  imports: [
    CardContainerComponent,
    SimpleCardComponent,
    RowComponent,
    SimpleTextComponent,
    LevelPinComponent
  ],
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.css'
})
export class CompanyListComponent {
  @Input() companies: Company[] = [];
  @Input() color: ThemeColor = "green";

  companyConfig = companyConfig;

  getCompanyEmoji(company: Company) {
    return this.companyConfig["type"][company.type]["emoji"];
  }
  getCompanyTypeLabel(company: Company) {
    return this.companyConfig["type"][company.type]["label"];
  }
}
