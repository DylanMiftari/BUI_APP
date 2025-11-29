import {Component, Input, OnInit} from '@angular/core';
import { CasinoDashboard } from "../../../features/casino/models/casino-dashboard.model";
import {
  CompanyDashboardHeaderComponent
} from "../../organisms/company-dashboard-header/company-dashboard-header.component";
import {SimpleCardComponent} from "../../atoms/simple-card/simple-card.component";
import {IconComponent} from "../../atoms/icon/icon.component";
import {SimpleTextComponent} from "../../atoms/simple-text/simple-text.component";
import {LevelPinComponent} from "../../atoms/level-pin/level-pin.component";
import {RowComponent} from "../../atoms/row/row.component";
import {SeperatorWithTextComponent} from "../../atoms/seperator-with-text/seperator-with-text.component";
import {UpgradeCompanyCardComponent} from "../../organisms/upgrade-company-card/upgrade-company-card.component";
import {CardContainerComponent} from "../../atoms/card-container/card-container.component";
import {
  CompanyLevelBenefitsCardComponent
} from "../../moleculs/company-level-benefits-card/company-level-benefits-card.component";

@Component({
  selector: 'app-casino-dashboard-template',
  standalone: true,
  imports: [CompanyDashboardHeaderComponent, SimpleCardComponent, IconComponent, SimpleTextComponent, LevelPinComponent, RowComponent, SeperatorWithTextComponent, UpgradeCompanyCardComponent, CardContainerComponent, CompanyLevelBenefitsCardComponent],
  templateUrl: './casino-dashboard-template.component.html',
  styleUrl: './casino-dashboard-template.component.css'
})
export class CasinoDashboardTemplateComponent implements OnInit {
  @Input() casinoDashboardData!: CasinoDashboard;
  buttonLinks: {label: string, link: string}[] = [];

  public levelBenefits: string[][] = [];
  public companyLevels: number[] = [1, 2, 3, 4, 5, 6]

  ngOnInit() {
    this.buttonLinks = [
      {'label': 'Casino Settings', 'link': '/casino/'+this.casinoDashboardData.info.id+'/config'}
    ]
    this.levelBenefits = [
      // Level 1
      [
        "🎫 Max tickets: "+this.casinoDashboardData.levels[0].nbMaxTicket+" ("+this.casinoDashboardData.levels[0].maxTicketPrice+"€ max)",
        "🎰 Game: Roulette unlocked"
      ],
      // Level 2
      [
        "🎫 Max tickets: "+this.casinoDashboardData.levels[1].nbMaxTicket+" ("+this.casinoDashboardData.levels[1].maxTicketPrice+"€ max)",
        "🎲 Game: Dice Roll unlocked"
      ],
      // Level 3
      [
        "🎫 Max tickets: "+this.casinoDashboardData.levels[2].nbMaxTicket+" ("+this.casinoDashboardData.levels[2].maxTicketPrice+"€ max)",
        "🃏 Game: Poker",
        "🎭 VIP tickets: "+this.casinoDashboardData.levels[2].nbMaxVIPTicket+" ("+this.casinoDashboardData.levels[2].maxVIPTicketPrice?.toLocaleString()+"€ max)"
      ],
      // Level 4
      [
        "🎫 Max tickets: "+this.casinoDashboardData.levels[3].nbMaxTicket.toLocaleString()+" ("+this.casinoDashboardData.levels[3].maxTicketPrice.toLocaleString()+"€ max)",
        "🂡 Game: Blackjack",
        "🎭 VIP tickets: "+this.casinoDashboardData.levels[3].nbMaxVIPTicket+" ("+this.casinoDashboardData.levels[3].maxVIPTicketPrice?.toLocaleString()+"€ max)"
      ],
      // Level 5
      [
        "🎫 Max tickets: "+this.casinoDashboardData.levels[4].nbMaxTicket.toLocaleString()+" ("+this.casinoDashboardData.levels[4].maxTicketPrice.toLocaleString()+"€ max)",
        "🎯 Game: Classic Roulette",
        "🎭 VIP tickets: "+this.casinoDashboardData.levels[4].nbMaxVIPTicket.toLocaleString()+" ("+this.casinoDashboardData.levels[4].maxVIPTicketPrice?.toLocaleString()+"€ max)"
      ],
      // Level 4
      [
        "🎫 Max tickets: "+this.casinoDashboardData.levels[5].nbMaxTicket.toLocaleString()+" ("+this.casinoDashboardData.levels[5].maxTicketPrice.toLocaleString()+"€ max)",
        "🎭 VIP tickets: "+this.casinoDashboardData.levels[5].nbMaxVIPTicket.toLocaleString()+" ("+this.casinoDashboardData.levels[5].maxVIPTicketPrice?.toLocaleString()+"€ max)"
      ],
    ]
  }
}
