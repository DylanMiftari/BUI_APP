import {Component, Input} from '@angular/core';
import {CardComponent} from "../../card/card.component";
import {RowComponent} from "../../../atoms/row/row.component";
import {IconComponent} from "../../../atoms/icon/icon.component";
import {ThemedTitleComponent} from "../../../atoms/themed-title/themed-title.component";
import {SeperatorWithTextComponent} from "../../../atoms/seperator-with-text/seperator-with-text.component";
import {SimpleTextComponent} from "../../../atoms/simple-text/simple-text.component";
import {ProgressBarComponent} from "../../../atoms/progress-bar/progress-bar.component";
import {MafiaRobType} from "../../../../core/types/mafia-rob.type";
import {LevelPinComponent} from "../../../atoms/level-pin/level-pin.component";
import {ButtonComponent} from "../../../atoms/button/button.component";

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
    ProgressBarComponent,
    LevelPinComponent,
    ButtonComponent
  ],
  templateUrl: './rob-stat-card.component.html',
  styleUrl: './rob-stat-card.component.css'
})
export class RobStatCardComponent {
  @Input() robType: MafiaRobType = "player";
  @Input() title: string | null = null;
  @Input() successRate: number = 65;
  @Input() minStealAmount: number = 70;
  @Input() maxStealAmount: number = 90;
  @Input() fixedStealAmount: number | null = null;
  @Input() maximumValue: number | null = null;
  @Input() cooldownInDays: number | null = null;
  @Input() targetDescription: string | null = null;
  @Input() stealAmountUnit: '%'|'€' = "%";
  @Input() targetLevel: number | null = null;
  @Input() showButton: boolean = false;


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
