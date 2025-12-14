import {Component, Input, OnInit} from '@angular/core';
import {BankDashboard} from "../../../../features/bank/models/bank-dashboard.model";
import {
  CompanyDashboardHeaderComponent
} from "../../../organisms/company-dashboard-header/company-dashboard-header.component";
import {ButtonComponent} from "../../../atoms/button/button.component";
import {RowComponent} from "../../../atoms/row/row.component";
import {SimpleCardComponent} from "../../../atoms/simple-card/simple-card.component";
import {SimpleTextComponent} from "../../../atoms/simple-text/simple-text.component";
import {ThemedTitleComponent} from "../../../atoms/themed-title/themed-title.component";
import {TitleComponent} from "../../../atoms/title/title.component";
import {RouterLink} from "@angular/router";
import {CardComponent} from "../../../organisms/card/card.component";
import {IconComponent} from "../../../atoms/icon/icon.component";
import {LevelPinComponent} from "../../../atoms/level-pin/level-pin.component";
import {SeperatorWithTextComponent} from "../../../atoms/seperator-with-text/seperator-with-text.component";
import {UpgradeCompanyCardComponent} from "../../../organisms/upgrade-company-card/upgrade-company-card.component";
import {CardContainerComponent} from "../../../atoms/card-container/card-container.component";
import {
  CompanyLevelBenefitsCardComponent
} from "../../../moleculs/company-level-benefits-card/company-level-benefits-card.component";

@Component({
  selector: 'app-bank-dashboard-template',
  standalone: true,
  imports: [
    CompanyDashboardHeaderComponent,
    ButtonComponent,
    RowComponent,
    SimpleCardComponent,
    SimpleTextComponent,
    ThemedTitleComponent,
    TitleComponent,
    RouterLink,
    CardComponent,
    IconComponent,
    LevelPinComponent,
    SeperatorWithTextComponent,
    UpgradeCompanyCardComponent,
    CardContainerComponent,
    CompanyLevelBenefitsCardComponent
  ],
  templateUrl: './bank-dashboard-template.component.html',
  styleUrl: './bank-dashboard-template.component.css'
})
export class BankDashboardTemplateComponent implements OnInit {
  @Input() bankDashboard!: BankDashboard;
  buttonLinks: {label: string, link: string}[] = [];

  public levelBenefits: string[][] = [];
  public companyLevels: number[] = [1, 2, 3, 4, 5, 6];

  ngOnInit(): void {
    this.buttonLinks = [
    ]
    this.levelBenefits = [
      [
        "💰 Max money per account : "+this.bankDashboard.bankLevel[0].maxMoneyAccount.toLocaleString()+"€",
        "📦 Max resources per account : "+this.bankDashboard.bankLevel[0].maxResourceAccount.toLocaleString()+"kg",
        "👥 Max accounts : "+this.bankDashboard.bankLevel[0].maxNbAccount
      ],
      [
        "💰 Max money per account : "+this.bankDashboard.bankLevel[1].maxMoneyAccount.toLocaleString()+"€",
        "📦 Max resources per account : "+this.bankDashboard.bankLevel[1].maxResourceAccount.toLocaleString()+"kg",
        "👥 Max accounts : "+this.bankDashboard.bankLevel[1].maxNbAccount
      ],
      [
        "💰 Max money per account : "+this.bankDashboard.bankLevel[2].maxMoneyAccount.toLocaleString()+"€",
        "📦 Max resources per account : "+this.bankDashboard.bankLevel[2].maxResourceAccount.toLocaleString()+"kg",
        "👥 Max accounts : "+this.bankDashboard.bankLevel[2].maxNbAccount,
        "🏦 Loan system unlocked"
      ],
      [
        "💰 Max money per account : "+this.bankDashboard.bankLevel[3].maxMoneyAccount.toLocaleString()+"€",
        "📦 Max resources per account : "+this.bankDashboard.bankLevel[3].maxResourceAccount.toLocaleString()+"kg",
        "👥 Max accounts : "+this.bankDashboard.bankLevel[3].maxNbAccount
      ],
      [
        "💰 Max money per account : "+this.bankDashboard.bankLevel[4].maxMoneyAccount.toLocaleString()+"€",
        "📦 Max resources per account : "+this.bankDashboard.bankLevel[4].maxResourceAccount.toLocaleString()+"kg",
        "👥 Max accounts : "+this.bankDashboard.bankLevel[4].maxNbAccount
      ],
      [
        "💰 Max money per account : "+this.bankDashboard.bankLevel[5].maxMoneyAccount.toLocaleString()+"€",
        "📦 Max resources per account : "+this.bankDashboard.bankLevel[5].maxResourceAccount.toLocaleString()+"kg",
        "👥 Max accounts : "+this.bankDashboard.bankLevel[5].maxNbAccount
      ],
    ]
  }
}
