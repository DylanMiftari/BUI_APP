import {Component, Input} from '@angular/core';
import {TargetResult} from "../../../../features/mafia/models/targets-result.model";
import {PageTitleComponent} from "../../../atoms/page-title/page-title.component";
import {SimpleTextComponent} from "../../../atoms/simple-text/simple-text.component";
import {SimpleCardComponent} from "../../../atoms/simple-card/simple-card.component";
import {IconComponent} from "../../../atoms/icon/icon.component";
import {MafiaRobType} from "../../../../core/types/mafia-rob.type";
import {RowComponent} from "../../../atoms/row/row.component";
import {TitleComponent} from "../../../atoms/title/title.component";
import {SeperatorWithTextComponent} from "../../../atoms/seperator-with-text/seperator-with-text.component";
import {CardContainerComponent} from "../../../atoms/card-container/card-container.component";
import {CardComponent} from "../../../organisms/card/card.component";
import {RobStatCardComponent} from "../../../organisms/mafia/rob-stat-card/rob-stat-card.component";
import {MafiaRobService} from "../../../../features/mafia/services/mafia-rob.service";
import {Mafia} from "../../../../features/mafia/models/mafia.model";
import {Company} from "../../../../features/general/models/company.model";
import {BankAccount} from "../../../../features/bank/models/bank-account.model";
import {House} from "../../../../features/general/models/house.model";
import {Home} from "../../../../features/general/models/home.model";
import {User} from "../../../../core/models/user.model";

@Component({
  selector: 'app-mafia-target-selection-template',
  standalone: true,
  imports: [
    PageTitleComponent,
    SimpleTextComponent,
    SimpleCardComponent,
    IconComponent,
    RowComponent,
    TitleComponent,
    SeperatorWithTextComponent,
    CardContainerComponent,
    CardComponent,
    RobStatCardComponent
  ],
  templateUrl: './mafia-target-selection-template.component.html',
  styleUrl: './mafia-target-selection-template.component.css'
})
export class MafiaTargetSelectionTemplateComponent {
  @Input() targets!: TargetResult;
  @Input() mafia!: Mafia;
  protected readonly Object = Object;

  constructor(
    public mafiaRobService: MafiaRobService
  ) {}

  getTargetsByType(type: string) {
    return this.targets[type as keyof TargetResult];
  }

  castInMafiaRobType(type: string) {
    return type as MafiaRobType;
  }

  getRobSuccessRate(target: any, targetType: string) {
    let castedTargetType = targetType as MafiaRobType;
    switch (castedTargetType) {
      case "player":
        return this.mafiaRobService.playerRobSuccessRate(this.mafia.level);
      case "company":
        let company = target as Company;
        return this.mafiaRobService.companyRobSuccessRate(this.mafia.level, company.level);
      case "bankAccount":
        let bankAccount = target as BankAccount;
        return this.mafiaRobService.bankAccountRobSuccessRate(this.mafia.level, bankAccount.company.level);
      case "house":
        let house = target as Home;
        return this.mafiaRobService.houseRobSuccessRate(this.mafia.level, house.house.level);
      case "cyberattack":
        return this.mafiaRobService.cyberAttackSuccessRate();
      case "aiDronePlayer":
        return this.mafiaRobService.aiDronePlayerSuccessRate();
      case "aiDroneHouse":
        return this.mafiaRobService.aiDroneHouseSuccessRate();
      case "shoplifting":
        return this.mafiaRobService.shopliftingSuccessRate();
      case "phishing":
        return this.mafiaRobService.phishingSuccessRate();
    }
  }

  getRobMinStealAmount(target: any, targetType: string) {
    let castedTargetType = targetType as MafiaRobType;
    switch (castedTargetType) {
      case "player":
        return this.mafiaRobService.playerRobMinStealAmount(this.mafia.level);
      case "company":
        let company = target as Company;
        return this.mafiaRobService.companyMinStealAmount(this.mafia.level, company.level);
      case "bankAccount":
        let bankAccount = target as BankAccount;
        return this.mafiaRobService.bankAccountMinStealAmount(this.mafia.level, bankAccount.company.level);
      case "house":
        let house = target as Home;
        return this.mafiaRobService.houseMinStealAmount(this.mafia.level, house.house.level);
      case "cyberattack":
        return this.mafiaRobService.cyberAttackStealAmount();
      case "aiDronePlayer":
        return this.mafiaRobService.aiDronePlayerMinStealAmount();
      case "aiDroneHouse":
        return this.mafiaRobService.aiDroneHouseMinStealAmount();
      case "shoplifting":
        let companyS = target as Company;
        return this.mafiaRobService.shopliftingMinStealAmount(companyS.level);
      case "phishing":
        return this.mafiaRobService.phishingStealAmount();
    }
  }

  getRobMaxStealAmount(target: any, targetType: string) {
    let castedTargetType = targetType as MafiaRobType;
    switch (castedTargetType) {
      case "player":
        return this.mafiaRobService.playerRobMaxStealAmount(this.mafia.level);
      case "company":
        let company = target as Company;
        return this.mafiaRobService.companyMaxStealAmount(this.mafia.level, company.level);
      case "bankAccount":
        let bankAccount = target as BankAccount;
        return this.mafiaRobService.bankAccountMaxStealAmount(this.mafia.level, bankAccount.company.level);
      case "house":
        let house = target as Home;
        return this.mafiaRobService.houseMaxStealAmount(this.mafia.level, house.house.level);
      case "cyberattack":
        return this.mafiaRobService.cyberAttackStealAmount();
      case "aiDronePlayer":
        return this.mafiaRobService.aiDronePlayerMaxStealAmount();
      case "aiDroneHouse":
        return this.mafiaRobService.aiDroneHouseMaxStealAmount();
      case "shoplifting":
        let companyS = target as Company;
        return this.mafiaRobService.shopliftingMaxStealAmount(companyS.level);
      case "phishing":
        return this.mafiaRobService.phishingStealAmount();
    }
  }

  getRobMaxValue(targetType: string) {
    let castedTargetType = targetType as MafiaRobType;
    switch (castedTargetType) {
      case "company":
        return this.mafiaRobService.companyMaxValue(this.mafia.level);
      case "bankAccount":
        return this.mafiaRobService.bankAccountMaxValue(this.mafia.level);
      default:
        return null;
    }
  }

  getRobCooldown(targetType: string) {
    let castedTargetType = targetType as MafiaRobType;
    switch (castedTargetType) {
      case "company":
        return this.mafiaRobService.companyCooldown();
      case "bankAccount":
        return this.mafiaRobService.bankAccountCooldown();
      case "cyberattack":
        return this.mafiaRobService.cyberAttackCooldown();
      case "phishing":
        return this.mafiaRobService.phishingCooldown();
      default:
        return null;
    }
  }

  getTitle(target: any, targetType: string) {
    let castedTargetType = targetType as MafiaRobType;
    switch (castedTargetType) {
      case "player":
      case "aiDronePlayer":
        let user = target as User;
        return user.pseudo;
      case "company":
      case "cyberattack":
      case "shoplifting":
        let company = target as Company;
        return company.name;
      case "bankAccount":
      case "phishing":
        let bankAccount = target as BankAccount;
        return "Bank Account No."+bankAccount.id;
      case "house":
      case "aiDroneHouse":
        let home = target as Home;
        return "House No."+home.id;
      default:
        return null;
    }
  }

  getLevel(target: any, targetType: string) {
    let castedTargetType = targetType as MafiaRobType;
    switch (castedTargetType) {
      case "player":
      case "aiDronePlayer":
        return null;
      case "company":
      case "cyberattack":
      case "shoplifting":
        let company = target as Company;
        return company.level;
      case "bankAccount":
      case "phishing":
        let bankAccount = target as BankAccount;
        return bankAccount.company.level;
      case "house":
      case "aiDroneHouse":
        let home = target as Home;
        return home.house.level;
      default:
        return null;
    }
  }

  getRobUnit(targetType: string) {
    let castedTargetType = targetType as MafiaRobType;
    switch (castedTargetType) {
      case "cyberattack":
      case "shoplifting":
        return "€";
      default:
        return "%";
    }
  }

  getTargetTitle(targetType: string) {
    switch (targetType) {
      case "player":
        return "Player"
      case "aiDronePlayer":
        return "AI Drone";
      case "company":
        return "Company";
      case "bankAccount":
        return "Bank Account";
      case "house":
        return "House";
      case "cyberattack":
        return "Cyber Attack";
      case "aiDroneHouse":
        return "AI Drone";
      case "shoplifting":
        return "Shoplifting";
      case "phishing":
        return "Phishing";
      default:
        return "Player";
    }
  }

  robTypeIcon(targetType: string) {
    switch (targetType) {
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
      default:
        return "👤";
    }
  }
}
