import {Component, EventEmitter, Input, Output} from '@angular/core';
import {BankAccount} from "../../../features/bank/models/bank-account.model";
import {CardComponent} from "../card/card.component";
import {RowComponent} from "../../atoms/row/row.component";
import {IconComponent} from "../../atoms/icon/icon.component";
import {SimpleTextComponent} from "../../atoms/simple-text/simple-text.component";
import {LevelPinComponent} from "../../atoms/level-pin/level-pin.component";
import {StatusIndicatorComponent} from "../../moleculs/status-indicator/status-indicator.component";
import {SimpleCardComponent} from "../../atoms/simple-card/simple-card.component";
import {DataWithTextComponent} from "../../moleculs/data-with-text/data-with-text.component";
import {ProgressBarComponent} from "../../atoms/progress-bar/progress-bar.component";
import {SeperatorWithTextComponent} from "../../atoms/seperator-with-text/seperator-with-text.component";

@Component({
  selector: 'app-bank-account-card',
  standalone: true,
  imports: [
    CardComponent,
    RowComponent,
    IconComponent,
    SimpleTextComponent,
    LevelPinComponent,
    StatusIndicatorComponent,
    SimpleCardComponent,
    DataWithTextComponent,
    ProgressBarComponent,
    SeperatorWithTextComponent
  ],
  templateUrl: './bank-account-card.component.html',
  styleUrl: './bank-account-card.component.css'
})
export class BankAccountCardComponent {
  @Input() bankAccount!: BankAccount;
  @Input() interactable: boolean = true;
  @Input() showUser: boolean = false;
  @Output() onClickAccount = new EventEmitter<BankAccount>();

  getStatusText() {
    return this.bankAccount.isEnable ? "Active" : "Inactive";
  }
  getStatusColor() {
    return this.bankAccount.isEnable ? "#059669" : "#dc2626";
  }

  clickOnAccount() {
    this.onClickAccount.emit(this.bankAccount);
  }
}
