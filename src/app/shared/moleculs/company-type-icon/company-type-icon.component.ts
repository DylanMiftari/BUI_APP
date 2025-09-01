import {Component, Input} from '@angular/core';
import {IconComponent} from "../../atoms/icon/icon.component";
import {companyConfig} from "../../../core/config/company.config";

@Component({
  selector: 'app-company-type-icon',
  standalone: true,
  imports: [
    IconComponent
  ],
  templateUrl: './company-type-icon.component.html',
  styleUrl: './company-type-icon.component.css'
})
export class CompanyTypeIconComponent {
  @Input() companyType!: string;
  @Input() iconSzie: number = 2;
  protected readonly companyConfig = companyConfig;
}
