import {Component, EventEmitter, Input, Output} from '@angular/core';
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
import {MafiaUtilsService} from "../../../../features/mafia/services/mafia-utils.service";
import {MafiaTargetType} from "../../../../features/mafia/types/mafia-target-type.type";
import {ErrorTextComponent} from "../../../atoms/error-text/error-text.component";

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
    RobStatCardComponent,
    ErrorTextComponent
  ],
  templateUrl: './mafia-target-selection-template.component.html',
  styleUrl: './mafia-target-selection-template.component.css'
})
export class MafiaTargetSelectionTemplateComponent {
  @Input() targets!: TargetResult;
  @Input() mafia!: Mafia;
  @Input() targetSelectionError: string = "";

  @Output() selectTarget = new EventEmitter<{targetType: MafiaTargetType, targetId: number}>();

  protected readonly Object = Object;

  constructor(
    public mafiaUtils: MafiaUtilsService
  ) {}

  onSelectTarget(data: any) {
    this.selectTarget.emit(data);
  }

  getTargetsByType(type: string) {
    return this.targets[type as keyof TargetResult];
  }

  castInMafiaRobType(type: string) {
    return type as MafiaRobType;
  }

  getRobSuccessRate(target: any, targetType: string) {
    let castedTargetType = targetType as MafiaRobType;
    return this.mafiaUtils.robSuccessRate(castedTargetType, this.mafia, target);
  }

  getRobMinStealAmount(target: any, targetType: string) {
    let castedTargetType = targetType as MafiaRobType;
    return this.mafiaUtils.getRobMinStealAmount(castedTargetType, this.mafia, target);
  }

  getRobMaxStealAmount(target: any, targetType: string) {
    let castedTargetType = targetType as MafiaRobType;
    return this.mafiaUtils.getRobMaxStealAmount(castedTargetType, this.mafia, target);
  }

  getRobMaxValue(targetType: string) {
    let castedTargetType = targetType as MafiaRobType;
    return this.mafiaUtils.getRobMaxValue(castedTargetType, this.mafia);
  }

  getRobCooldown(targetType: string) {
    let castedTargetType = targetType as MafiaRobType;
    return this.mafiaUtils.getRobCooldown(castedTargetType);
  }

  getTitle(target: any, targetType: string) {
    let castedTargetType = targetType as MafiaRobType;
    return this.mafiaUtils.getTargetTitle(castedTargetType, target);
  }

  getLevel(target: any, targetType: string) {
    let castedTargetType = targetType as MafiaRobType;
    return this.mafiaUtils.getTargetLevel(castedTargetType, target);
  }

  getRobUnit(targetType: string) {
    let castedTargetType = targetType as MafiaRobType;
    return this.mafiaUtils.getRobAmountUnit(castedTargetType);
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
    return this.mafiaUtils.robTypeIcon(targetType as MafiaRobType);
  }

  targetId(targetType: string, target: any) {
    return this.mafiaUtils.getTargetId(targetType as MafiaRobType, target);
  }
}
