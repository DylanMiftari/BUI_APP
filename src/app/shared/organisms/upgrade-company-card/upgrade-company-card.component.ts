import {Component, Input} from '@angular/core';
import {SimpleCardComponent} from "../../atoms/simple-card/simple-card.component";
import {ThemeColor} from "../../../core/themeColor/theme-color-type";
import {SimpleTextComponent} from "../../atoms/simple-text/simple-text.component";
import {RowComponent} from "../../atoms/row/row.component";
import {PinComponent} from "../../atoms/pin/pin.component";
import {companyConfig} from "../../../core/config/company.config";
import {ButtonComponent} from "../../atoms/button/button.component";
import {CompanyService} from "../../../features/general/services/company.service";
import {ErrorTextComponent} from "../../atoms/error-text/error-text.component";

@Component({
  selector: 'app-upgrade-company-card',
  standalone: true,
  imports: [
    SimpleCardComponent,
    SimpleTextComponent,
    RowComponent,
    PinComponent,
    ButtonComponent,
    ErrorTextComponent
  ],
  templateUrl: './upgrade-company-card.component.html',
  styleUrl: './upgrade-company-card.component.css'
})
export class UpgradeCompanyCardComponent {
  @Input() theme: ThemeColor = "casino-regular"
  @Input() companyType!: string;
  @Input() currentLevel!: number;
  @Input() companyId!: number;

  public upgradeError: string = "";
  protected readonly companyConfig = companyConfig;

  constructor(private companyService: CompanyService) {
  }

  upgradeCompany() {
    this.companyService.upgradeCompany(this.companyId).subscribe({
      next: response => {
        window.location.reload();
      },
      error: err => {
        this.upgradeError = err.error.message;
      }
    });
  }
}
