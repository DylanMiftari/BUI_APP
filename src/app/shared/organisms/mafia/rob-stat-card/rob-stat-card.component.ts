import {Component, Input} from '@angular/core';
import {CardComponent} from "../../card/card.component";
import {RowComponent} from "../../../atoms/row/row.component";
import {IconComponent} from "../../../atoms/icon/icon.component";
import {ThemedTitleComponent} from "../../../atoms/themed-title/themed-title.component";
import {SeperatorWithTextComponent} from "../../../atoms/seperator-with-text/seperator-with-text.component";
import {SimpleTextComponent} from "../../../atoms/simple-text/simple-text.component";
import {ProgressBarComponent} from "../../../atoms/progress-bar/progress-bar.component";

@Component({
  selector: 'app-rob-stat-card',
  standalone: true,
  imports: [
    CardComponent,
    RowComponent,
    IconComponent,
    ThemedTitleComponent,
    SeperatorWithTextComponent,
    SimpleTextComponent,
    ProgressBarComponent
  ],
  templateUrl: './rob-stat-card.component.html',
  styleUrl: './rob-stat-card.component.css'
})
export class RobStatCardComponent {
  @Input() robType: "player"|"company"|"bankAccount"|"house"|"cyberattack"|"aiDronePlayer"|"aiDroneHouse"|"shoplifting"|"phishing" = "player";
  @Input() successRate: number = 65;
  @Input() minStealAmount: number = 70;
  @Input() maxStealAmount: number = 90;
  @Input() fixedStealAmount: number | null = null;
  @Input() maximumValue: number | null = null;
  @Input() cooldownInDays: number | null = null;
  @Input() targetDescription: string | null = null;
  @Input() stealAmountUnit: '%'|'€' = "%";


  get robTypeIcon() {
    switch (this.robType) {
      case "player":
      case "aiDronePlayer":
        return "👤";
      case "company":
        return "🏢";
      case "bankAccount":
        return "🏦";
      case "house":
        return "🏠";
      case "cyberattack":
        return "💻";
      case "aiDroneHouse":
        return "🏠";
      case "shoplifting":
        return "🥷";
      case "phishing":
        return "🎣";
    }
  }

  get robTitle() {
    switch (this.robType) {
      case "player":
        return "Player Theft";
      case "company":
        return "Business Vault";
      case "bankAccount":
        return "Bank Account";
      case "house":
        return "House Safe";
      case "cyberattack":
        return "Cyber Attack";
      case "aiDronePlayer":
        return "AI Drone";
      case "aiDroneHouse":
        return "AI Drone";
      case "shoplifting":
        return "Shoplifting"
      case "phishing":
        return "Targeted phishing";
    }
  }
}
