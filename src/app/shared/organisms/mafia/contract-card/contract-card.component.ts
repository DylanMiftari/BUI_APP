import {Component, Input, OnInit} from '@angular/core';
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
import {MafiaUtilsService} from "../../../../features/mafia/services/mafia-utils.service";
import {MafiaRobType} from "../../../../core/types/mafia-rob.type";
import {LevelPinComponent} from "../../../atoms/level-pin/level-pin.component";
import {FormControl, FormGroup} from "@angular/forms";
import {InputComponent} from "../../../atoms/input/input.component";

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
    ProgressBarComponent,
    LevelPinComponent,
    InputComponent
  ],
  templateUrl: './contract-card.component.html',
  styleUrl: './contract-card.component.css'
})
export class ContractCardComponent implements OnInit {
  @Input() mafiaContract!: MafiaContract;
  @Input() mafiaLevel!: number;
  @Input() forOwner: boolean = false;
  robType: MafiaRobType|null = null;

  formGroup: FormGroup = new FormGroup({});

  constructor(
    private mafiaUtils: MafiaUtilsService
  ) {
  }

  ngOnInit() {
    this.robType = this.mafiaUtils.getRobTypeWithTargetType(this.mafiaContract.targetType);
    this.formGroup = new FormGroup({
      newPrice: new FormControl(this.mafiaContract.clientPrice == -1 ? null : this.mafiaContract.clientPrice)
    });
  }

  get newPriceControl(): FormControl {
    return this.formGroup.get("newPrice") as FormControl;
  }

  get robTypeIcon() {
    return this.mafiaUtils.robTypeIcon(this.robType!)
  }

  get robTitle() {
    return this.mafiaUtils.robTitle(this.robType!);
  }

  get targetName() {
    return this.mafiaUtils.getTargetTitle(this.robType!, this.mafiaContract.target)
  }

  get targetLevel() {
    return this.mafiaUtils.getTargetLevel(this.robType!, this.mafiaContract.target);
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
    return this.mafiaUtils.robSuccessRateLevel(this.robType!, this.mafiaContract.mafiaLevel, this.mafiaContract.target);
  }

  get minStealAmount() {
    return this.mafiaUtils.getRobMinStealAmountLevel(this.robType!, this.mafiaContract.mafiaLevel, this.mafiaContract.target);
  }
  get maxStealAmount() {
    return this.mafiaUtils.getRobMaxStealAmountLevel(this.robType!, this.mafiaContract.mafiaLevel, this.mafiaContract.target);
  }
  get stealAmountUnit() {
    return this.mafiaUtils.getRobAmountUnit(this.robType!);
  }
  get maxValue() {
    return this.mafiaUtils.getRobMaxValueLevel(this.robType!, this.mafiaContract.mafiaLevel);
  }

  get robCosts() {
    return this.mafiaUtils.getRobCosts(this.robType!, this.mafiaContract.mafiaLevel);
  }
}
