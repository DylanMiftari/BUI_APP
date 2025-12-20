import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BankDashboard} from "../../../../features/bank/models/bank-dashboard.model";
import {BankAccount} from "../../../../features/bank/models/bank-account.model";
import {PageTitleComponent} from "../../../atoms/page-title/page-title.component";
import {CardComponent} from "../../../organisms/card/card.component";
import {RowComponent} from "../../../atoms/row/row.component";
import {IconComponent} from "../../../atoms/icon/icon.component";
import {SimpleTextComponent} from "../../../atoms/simple-text/simple-text.component";
import {ThemedTitleComponent} from "../../../atoms/themed-title/themed-title.component";
import {StatusIndicatorComponent} from "../../../moleculs/status-indicator/status-indicator.component";
import {DataWithTextComponent} from "../../../moleculs/data-with-text/data-with-text.component";
import {CardContainerComponent} from "../../../atoms/card-container/card-container.component";
import {SeperatorWithTextComponent} from "../../../atoms/seperator-with-text/seperator-with-text.component";
import {TitleComponent} from "../../../atoms/title/title.component";
import {
  BankAccountTransactionCardComponent
} from "../../../organisms/bank/bank-account-transaction-card/bank-account-transaction-card.component";
import {FormControl, FormGroup} from "@angular/forms";
import {InputComponent} from "../../../atoms/input/input.component";
import {ButtonComponent} from "../../../atoms/button/button.component";
import {ErrorTextComponent} from "../../../atoms/error-text/error-text.component";
import {ResourceListComponent} from "../../../organisms/resource-list/resource-list.component";

@Component({
  selector: 'app-account-details-config-templates',
  standalone: true,
  imports: [
    PageTitleComponent,
    CardComponent,
    RowComponent,
    IconComponent,
    SimpleTextComponent,
    ThemedTitleComponent,
    StatusIndicatorComponent,
    DataWithTextComponent,
    CardContainerComponent,
    SeperatorWithTextComponent,
    TitleComponent,
    BankAccountTransactionCardComponent,
    InputComponent,
    ButtonComponent,
    ErrorTextComponent,
    ResourceListComponent
  ],
  templateUrl: './account-details-config-templates.component.html',
  styleUrl: './account-details-config-templates.component.css'
})
export class AccountDetailsConfigTemplatesComponent implements OnInit {
  @Input() bankDashboard!: BankDashboard;
  @Input() bankAccount!: BankAccount;
  @Input() updateError: string = "";

  @Output() onUpdateBankAccountConfig = new EventEmitter<{
    accountMaintenanceCost: number,
    transferCost: number,
    maxMoney: number,
    maxResource: number,
  }>();

  formGroup: FormGroup | null = null;

  ngOnInit() {
    this.formGroup = new FormGroup({
      accountMaintenanceCost: new FormControl(this.bankAccount.accountMaintenanceCost),
      transferCost: new FormControl(this.bankAccount.transferCost),
      maxMoney: new FormControl(this.bankAccount.maxMoney),
      maxResource: new FormControl(this.bankAccount.maxResource),
    });
  }

  getStatusText() {
    return this.bankAccount.isEnable ? "Active" : "Inactive";
  }
  getStatusColor() {
    return this.bankAccount.isEnable ? "#059669" : "#dc2626";
  }
  get accountMaintenanceCostControl() {
    return this.formGroup!.get("accountMaintenanceCost") as FormControl;
  }
  get transferCostControl() {
    return this.formGroup!.get("transferCost") as FormControl;
  }
  get maxMoneyControl() {
    return this.formGroup!.get("maxMoney") as FormControl;
  }
  get maxResourceControl() {
    return this.formGroup!.get("maxResource") as FormControl;
  }

  get maxMaxAccountMoney() {
    return this.bankDashboard.bankLevel[this.bankDashboard.bank.level-1].maxMoneyAccount;
  }
  get maxMaxAccountResource() {
    return this.bankDashboard.bankLevel[this.bankDashboard.bank.level-1].maxResourceAccount;
  }

  updateBankAccountConfig() {
    this.onUpdateBankAccountConfig.emit({
      accountMaintenanceCost: this.formGroup!.value.accountMaintenanceCost,
      transferCost: this.formGroup!.value.transferCost,
      maxMoney: this.formGroup!.value.maxMoney,
      maxResource: this.formGroup!.value.maxResource
    });
  }
}
