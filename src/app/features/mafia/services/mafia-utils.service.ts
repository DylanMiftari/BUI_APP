import { Injectable } from '@angular/core';
import {MafiaRobType} from "../../../core/types/mafia-rob.type";
import {MafiaRobService} from "./mafia-rob.service";
import {Company} from "../../general/models/company.model";
import {BankAccount} from "../../bank/models/bank-account.model";
import {Home} from "../../general/models/home.model";
import {MafiaTargetType} from "../types/mafia-target-type.type";
import {Mafia} from "../models/mafia.model";
import {User} from "../../../core/models/user.model";
import {mafiaConfig} from "../../../core/config/mafia.config";

@Injectable({
  providedIn: 'root'
})
export class MafiaUtilsService {

  constructor(
    private mafiaRobService: MafiaRobService
  ) { }

  robTypeIcon(robType: MafiaRobType) {
    switch (robType) {
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

  robTitle(robType: MafiaRobType) {
    switch (robType) {
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

  robSuccessRate(robType: MafiaRobType, mafia: Mafia, target: any) {
    return this.robSuccessRateLevel(robType, mafia.level, target);
  }
  robSuccessRateLevel(robType: MafiaRobType, mafiaLevel: number, target: any) {
    switch (robType) {
      case "player":
        return this.mafiaRobService.playerRobSuccessRate(mafiaLevel);
      case "company":
        let company = target as Company;
        return this.mafiaRobService.companyRobSuccessRate(mafiaLevel, company.level);
      case "bankAccount":
        let bankAccount = target as BankAccount;
        return this.mafiaRobService.bankAccountRobSuccessRate(mafiaLevel, bankAccount.company.level);
      case "house":
        let house = target as Home;
        return this.mafiaRobService.houseRobSuccessRate(mafiaLevel, house.house.level);
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

  getRobMinStealAmount(robType: MafiaRobType, mafia: Mafia, target: any) {
    return this.getRobMinStealAmountLevel(robType, mafia.level, target)
  }
  getRobMinStealAmountLevel(robType: MafiaRobType, mafiaLevel: number, target: any) {
    switch (robType) {
      case "player":
        return this.mafiaRobService.playerRobMinStealAmount(mafiaLevel);
      case "company":
        let company = target as Company;
        return this.mafiaRobService.companyMinStealAmount(mafiaLevel, company.level);
      case "bankAccount":
        let bankAccount = target as BankAccount;
        return this.mafiaRobService.bankAccountMinStealAmount(mafiaLevel, bankAccount.company.level);
      case "house":
        let house = target as Home;
        return this.mafiaRobService.houseMinStealAmount(mafiaLevel, house.house.level);
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


  getRobMaxStealAmount(robType: MafiaRobType, mafia: Mafia, target: any) {
    return this.getRobMaxStealAmountLevel(robType, mafia.level, target);
  }
  getRobMaxStealAmountLevel(robType: MafiaRobType, mafiaLevel: number, target: any) {
    switch (robType) {
      case "player":
        return this.mafiaRobService.playerRobMaxStealAmount(mafiaLevel);
      case "company":
        let company = target as Company;
        return this.mafiaRobService.companyMaxStealAmount(mafiaLevel, company.level);
      case "bankAccount":
        let bankAccount = target as BankAccount;
        return this.mafiaRobService.bankAccountMaxStealAmount(mafiaLevel, bankAccount.company.level);
      case "house":
        let house = target as Home;
        return this.mafiaRobService.houseMaxStealAmount(mafiaLevel, house.house.level);
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

  getRobMaxValue(robType: MafiaRobType, mafia: Mafia) {
    return this.getRobMaxValueLevel(robType, mafia.level);
  }
  getRobMaxValueLevel(robType: MafiaRobType, mafiaLevel: number) {
    switch (robType) {
      case "company":
        return this.mafiaRobService.companyMaxValue(mafiaLevel);
      case "bankAccount":
        return this.mafiaRobService.bankAccountMaxValue(mafiaLevel);
      default:
        return null;
    }
  }

  getRobCooldown(robType: MafiaRobType) {
    switch (robType) {
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

  getTargetTitle(robType: MafiaRobType, target: any) {
    switch (robType) {
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
        return "";
    }
  }

  getTargetLevel(robType: MafiaRobType, target: any) {
    switch (robType) {
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

  getRobAmountUnit(robType: MafiaRobType) {
    switch (robType) {
      case "cyberattack":
      case "shoplifting":
        return "€";
      default:
        return "%";
    }
  }

  getTargetId(robType: MafiaRobType, target: any) {
    switch (robType) {
      case "player":
      case "aiDronePlayer":
        let user = target as User;
        return user.id;
      case "company":
      case "shoplifting":
      case "cyberattack":
        let company = target as Company;
        return company.id;
      case "bankAccount":
      case "phishing":
        let bankAccount = target as BankAccount;
        return bankAccount.id;
      case "house":
      case "aiDroneHouse":
        let home = target as Home;
        return home.id;
      default:
        return 0;
    }
  }

  getTargetTypeWithRobType(robType: MafiaRobType) {
    switch (robType) {
      case "player":
        return "user";
      case "house":
        return "home";
      case "aiDronePlayer":
        return "userDrone";
      case "aiDroneHouse":
        return "homeDrone";
      default:
        return robType;
    }
  }

  getRobTypeWithTargetType(targetType: MafiaTargetType) {
    switch (targetType) {
      case "user":
        return "player";
      case "home":
        return "house";
      case "userDrone":
        return "aiDronePlayer";
      case "homeDrone":
        return "aiDroneHouse";
      default:
        return targetType;
    }
  }

  getRobCosts(robType: MafiaRobType, mafiaLevel: number) {
    switch (robType) {
      case "player":
        return mafiaConfig.rob.player.costByLevel[mafiaLevel];
      case "company":
        return mafiaConfig.rob.company.costByLevel[mafiaLevel];
      case "bankAccount":
        return mafiaConfig.rob.bankAccount.costByLevel[mafiaLevel];
      case "house":
        return mafiaConfig.rob.house.costByLevel[mafiaLevel];
      case "cyberattack":
        return mafiaConfig.rob.cyberattack.cost;
      case "aiDronePlayer":
        return mafiaConfig.rob.aiDronePlayer.cost;
      case "aiDroneHouse":
        return mafiaConfig.rob.aiDroneHouse.cost;
      case "shoplifting":
        return mafiaConfig.rob.shoplifting.cost;
      case "phishing":
        return mafiaConfig.rob.phishing.cost;
    }
  }
}
