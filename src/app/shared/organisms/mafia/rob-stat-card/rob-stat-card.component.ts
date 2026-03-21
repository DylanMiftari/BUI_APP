import {Component, EventEmitter, Input, Output} from '@angular/core';
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
import {MafiaTargetType} from "../../../../features/mafia/types/mafia-target-type.type";
import {MafiaUtilsService} from "../../../../features/mafia/services/mafia-utils.service";

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
  @Input() targetId!: number;
  @Input() targetType!: string;
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

  @Output() selectTarget = new EventEmitter<{targetType: string, targetId: number}>();

  constructor(
    private mafiaUtils: MafiaUtilsService
  ) {
  }

  get robTypeIcon() {
    return this.mafiaUtils.robTypeIcon(this.robType);
  }

  get robTitle() {
    return this.mafiaUtils.robTitle(this.robType);
  }

  getTargetType() {
    return this.mafiaUtils.getTargetTypeWithRobType(this.robType);
  }

  onClickSelectTarget(targetType: string, targetId: number) {
    this.selectTarget.emit({targetType: targetType, targetId: targetId});
  }
}
