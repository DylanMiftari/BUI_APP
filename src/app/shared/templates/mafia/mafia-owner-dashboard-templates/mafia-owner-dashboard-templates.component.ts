import {Component, Input, OnInit} from '@angular/core';
import {Mafia} from "../../../../features/mafia/models/mafia.model";
import {CardComponent} from "../../../organisms/card/card.component";
import {ThemedTitleComponent} from "../../../atoms/themed-title/themed-title.component";
import {RowComponent} from "../../../atoms/row/row.component";
import {IconComponent} from "../../../atoms/icon/icon.component";
import {SimpleTextComponent} from "../../../atoms/simple-text/simple-text.component";
import {LevelPinComponent} from "../../../atoms/level-pin/level-pin.component";
import {SimpleCardComponent} from "../../../atoms/simple-card/simple-card.component";
import {SeperatorWithTextComponent} from "../../../atoms/seperator-with-text/seperator-with-text.component";
import {UpgradeCompanyCardComponent} from "../../../organisms/upgrade-company-card/upgrade-company-card.component";
import {CardContainerComponent} from "../../../atoms/card-container/card-container.component";
import {
  CompanyLevelBenefitsCardComponent
} from "../../../moleculs/company-level-benefits-card/company-level-benefits-card.component";
import {mafiaConfig} from "../../../../core/config/mafia.config";

@Component({
  selector: 'app-mafia-owner-dashboard-templates',
  standalone: true,
  imports: [
    CardComponent,
    ThemedTitleComponent,
    RowComponent,
    IconComponent,
    SimpleTextComponent,
    LevelPinComponent,
    SimpleCardComponent,
    SeperatorWithTextComponent,
    UpgradeCompanyCardComponent,
    CardContainerComponent,
    CompanyLevelBenefitsCardComponent
  ],
  templateUrl: './mafia-owner-dashboard-templates.component.html',
  styleUrl: './mafia-owner-dashboard-templates.component.css'
})
export class MafiaOwnerDashboardTemplatesComponent implements OnInit {
  @Input() mafia!: Mafia;
  public levelBenefits: string[][] = [];
  public companyLevels: number[] = [1, 2, 3, 4, 5, 6];

  constructor() {
  }

  ngOnInit() {
    this.levelBenefits = [
      [
        "👤 Player Theft Cost : "+this.mafia.levels![0].playerRobPrice.toLocaleString()+"€",
        "🏢 Business Vault : "+this.mafia.levels![0].companyRobPrice.toLocaleString()+"€",
        "🏦 Bank Account : "+this.mafia.levels![0].bankAccountRobPrice.toLocaleString()+"€",
        "🏠 House Safe : "+this.mafia.levels![0].homeSafeRobPrice.toLocaleString()+"€",
      ],
      [
        "👤 Player Theft Cost : "+this.mafia.levels![1].playerRobPrice.toLocaleString()+"€",
        "🏢 Business Vault : "+this.mafia.levels![1].companyRobPrice.toLocaleString()+"€",
        "🏦 Bank Account : "+this.mafia.levels![1].bankAccountRobPrice.toLocaleString()+"€",
        "🏠 House Safe : "+this.mafia.levels![1].homeSafeRobPrice.toLocaleString()+"€",
      ],
      [
        "👤 Player Theft Cost : "+this.mafia.levels![2].playerRobPrice.toLocaleString()+"€",
        "🏢 Business Vault : "+this.mafia.levels![2].companyRobPrice.toLocaleString()+"€",
        "🏦 Bank Account : "+this.mafia.levels![2].bankAccountRobPrice.toLocaleString()+"€",
        "🏠 House Safe : "+this.mafia.levels![2].homeSafeRobPrice.toLocaleString()+"€",
        `💻 Cyber Attack unlocked. Rob ${mafiaConfig.rob.cyberattack.target} you have a ${mafiaConfig.rob.cyberattack.successRate}% chance of stealing ${mafiaConfig.rob.cyberattack.stealAmount.toLocaleString()}€.`
      ],
      [
        "👤 Player Theft Cost : "+this.mafia.levels![3].playerRobPrice.toLocaleString()+"€",
        "🏢 Business Vault : "+this.mafia.levels![3].companyRobPrice.toLocaleString()+"€",
        "🏦 Bank Account : "+this.mafia.levels![3].bankAccountRobPrice.toLocaleString()+"€",
        "🏠 House Safe : "+this.mafia.levels![3].homeSafeRobPrice.toLocaleString()+"€",
        `👤🏠 AI Drone : Steals from players and houses containing more than ${(3500).toLocaleString()}€. The theft is cheaper and more likely to succeed`
      ],
      [
        "👤 Player Theft Cost : "+this.mafia.levels![4].playerRobPrice.toLocaleString()+"€",
        "🏢 Business Vault : "+this.mafia.levels![4].companyRobPrice.toLocaleString()+"€",
        "🏦 Bank Account : "+this.mafia.levels![4].bankAccountRobPrice.toLocaleString()+"€",
        "🏠 House Safe : "+this.mafia.levels![4].homeSafeRobPrice.toLocaleString()+"€",
        `🥷 Shoplifting : Target companies : Inexpensive, high success rate, but small returns`
      ],
      [
        "👤 Player Theft Cost : "+this.mafia.levels![5].playerRobPrice.toLocaleString()+"€",
        "🏢 Business Vault : "+this.mafia.levels![5].companyRobPrice.toLocaleString()+"€",
        "🏦 Bank Account : "+this.mafia.levels![5].bankAccountRobPrice.toLocaleString()+"€",
        "🏠 House Safe : "+this.mafia.levels![5].homeSafeRobPrice.toLocaleString()+"€",
        `🎣 Phishing : Bank Account with more than ${(10000).toLocaleString()}€. Very low success rate but potentially huge rewards (${mafiaConfig.rob.phishing.stealAmount.toLocaleString()}% without limit).`
      ],
    ]
  }
}
