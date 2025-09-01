import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PageTitleComponent} from "../../atoms/page-title/page-title.component";
import {Company} from "../../../features/general/models/company.model";
import {RowComponent} from "../../atoms/row/row.component";
import {SimpleTextComponent} from "../../atoms/simple-text/simple-text.component";
import {companyConfig} from "../../../core/config/company.config";
import {ButtonComponent} from "../../atoms/button/button.component";
import {CardContainerComponent} from "../../atoms/card-container/card-container.component";
import {CardComponent} from "../../organisms/card/card.component";
import {CompanyTypeIconComponent} from "../../moleculs/company-type-icon/company-type-icon.component";
import {SubtitleComponent} from "../../atoms/subtitle/subtitle.component";
import {LevelPinComponent} from "../../atoms/level-pin/level-pin.component";
import {SeperatorWithTextComponent} from "../../atoms/seperator-with-text/seperator-with-text.component";
import {DataWithTextComponent} from "../../moleculs/data-with-text/data-with-text.component";
import {ErrorTextComponent} from "../../atoms/error-text/error-text.component";

@Component({
  selector: 'app-company-dashboard-template',
  standalone: true,
  imports: [
    PageTitleComponent,
    RowComponent,
    SimpleTextComponent,
    ButtonComponent,
    CardContainerComponent,
    CardComponent,
    CompanyTypeIconComponent,
    SubtitleComponent,
    LevelPinComponent,
    SeperatorWithTextComponent,
    DataWithTextComponent,
    ErrorTextComponent
  ],
  templateUrl: './company-dashboard-template.component.html',
  styleUrl: './company-dashboard-template.component.css'
})
export class CompanyDashboardTemplateComponent {
  @Input() companies!: Company[];
  @Input() upgradeError: Record<number, string> = {};
  @Output() upgradeCompany = new EventEmitter<number>();
  protected readonly companyConfig = companyConfig;

  onClickOnUpgrade(company: Company) {
    this.upgradeCompany.emit(company.id);
  }
}
