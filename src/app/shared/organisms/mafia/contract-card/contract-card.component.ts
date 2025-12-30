import {Component, Input} from '@angular/core';
import {MafiaContract} from "../../../../features/mafia/models/mafia-contract.model";
import {CardComponent} from "../../card/card.component";
import {RowComponent} from "../../../atoms/row/row.component";
import {IconComponent} from "../../../atoms/icon/icon.component";
import {User} from "../../../../core/models/user.model";
import {Company} from "../../../../features/general/models/company.model";
import {BankAccount} from "../../../../features/bank/models/bank-account.model";
import {Home} from "../../../../features/general/models/home.model";
import {TitleComponent} from "../../../atoms/title/title.component";
import {SimpleTextComponent} from "../../../atoms/simple-text/simple-text.component";
import {StatusIndicatorComponent} from "../../../moleculs/status-indicator/status-indicator.component";
import {PinComponent} from "../../../atoms/pin/pin.component";
import {SeperatorWithTextComponent} from "../../../atoms/seperator-with-text/seperator-with-text.component";
import {SimpleCardComponent} from "../../../atoms/simple-card/simple-card.component";
import {MafiaRobService} from "../../../../features/mafia/services/mafia-rob.service";
import {MinimalBankAccount} from "../../../../features/bank/models/minimal-bank-account.model";
import {ProgressBarComponent} from "../../../atoms/progress-bar/progress-bar.component";

@Component({
  selector: 'app-contract-card',
  standalone: true,
  imports: [
    CardComponent,
    RowComponent,
    IconComponent,
    TitleComponent,
    SimpleTextComponent,
    StatusIndicatorComponent,
    PinComponent,
    SeperatorWithTextComponent,
    SimpleCardComponent,
    ProgressBarComponent
  ],
  templateUrl: './contract-card.component.html',
  styleUrl: './contract-card.component.css'
})
export class ContractCardComponent {
  @Input() mafiaContract!: MafiaContract;
  @Input() mafiaLevel!: number;

  constructor(
    private mafiaService: MafiaRobService
  ) {
  }

  get robTypeIcon() {
    switch (this.mafiaContract.targetType) {
      case "user":
      case "userDrone":
        return "👤";
      case "company":
        return "🏢";
      case "bankAccount":
        return "🏦";
      case "home":
        return "🏠";
      case "cyberattack":
        return "💻";
      case "homeDrone":
        return "🏠";
      case "shoplifting":
        return "🥷";
      case "phishing":
        return "🎣";
    }
  }

  get robTitle() {
    switch (this.mafiaContract.targetType) {
      case "user":
        return "Player Theft";
      case "company":
        return "Business Vault";
      case "bankAccount":
        return "Bank Account";
      case "home":
        return "House Safe";
      case "cyberattack":
        return "Cyber Attack";
      case "userDrone":
        return "AI Drone";
      case "homeDrone":
        return "AI Drone";
      case "shoplifting":
        return "Shoplifting"
      case "phishing":
        return "Targeted phishing";
    }
  }

  get targetName() {
    switch (this.mafiaContract.targetType) {
      case "user":
      case "userDrone":
        return (this.mafiaContract.target as User).pseudo;
      case "company":
      case "cyberattack":
      case "shoplifting":
        return (this.mafiaContract.target as Company).name;
      case "bankAccount":
      case "phishing":
        return "Bank Account No."+(this.mafiaContract.target as BankAccount).id;
      case "home":
      case "homeDrone":
        return "House No."+(this.mafiaContract.target as Home).id;
    }
  }

  get statusText() {
    switch (this.mafiaContract.robState) {
      case "wait_on_mafia":
        return "Wait on Mafia";
    }
  }

  get statusColor() {
    switch (this.mafiaContract.robState) {
      case "wait_on_mafia":
        return "#a69003";
    }
  }

  get successRate() {
    switch (this.mafiaContract.targetType) {
      case "user":
        return this.mafiaService.playerRobSuccessRate(this.mafiaLevel);
      case "company":
        let company = this.mafiaContract.target as Company;
        return this.mafiaService.companyRobSuccessRate(this.mafiaLevel, company.level);
      case "bankAccount":
        let bankAccount = this.mafiaContract.target as MinimalBankAccount;
        return this.mafiaService.bankAccountRobSuccessRate(this.mafiaLevel, bankAccount.company.level);
      case "home":
        let home = this.mafiaContract.target as Home;
        return this.mafiaService.houseRobSuccessRate(this.mafiaLevel, home.house.level);
      case "cyberattack":
        return this.mafiaService.cyberAttackSuccessRate();
      case "userDrone":
        return this.mafiaService.aiDronePlayerSuccessRate();
      case "homeDrone":
        return this.mafiaService.aiDroneHouseSuccessRate();
      case "shoplifting":
        return this.mafiaService.shopliftingSuccessRate();
      case "phishing":
        return this.mafiaService.phishingSuccessRate();
    }
  }
}
