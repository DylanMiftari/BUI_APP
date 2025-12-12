import {Component, Input} from '@angular/core';
import {BankAccount} from "../../../../features/bank/models/bank-account.model";
import {FormControl, FormGroup} from "@angular/forms";
import {BankService} from "../../../../features/bank/services/bank.service";
import {ButtonComponent} from "../../../atoms/button/button.component";
import {CardComponent} from "../../card/card.component";
import {ErrorTextComponent} from "../../../atoms/error-text/error-text.component";
import {IconComponent} from "../../../atoms/icon/icon.component";
import {InputComponent} from "../../../atoms/input/input.component";
import {RowComponent} from "../../../atoms/row/row.component";
import {SimpleCardComponent} from "../../../atoms/simple-card/simple-card.component";
import {SimpleTextComponent} from "../../../atoms/simple-text/simple-text.component";

@Component({
  selector: 'app-money-transfer-box',
  standalone: true,
  imports: [
    ButtonComponent,
    CardComponent,
    ErrorTextComponent,
    IconComponent,
    InputComponent,
    RowComponent,
    SimpleCardComponent,
    SimpleTextComponent
  ],
  templateUrl: './money-transfer-box.component.html',
  styleUrl: './money-transfer-box.component.css'
})
export class MoneyTransferBoxComponent {
  @Input() bankAccount!: BankAccount;

  transactionFormGroup: FormGroup;
  transactionError: string = "";

  constructor(
    private bankService: BankService,
  ) {
    this.transactionFormGroup = new FormGroup({
      destAccountId: new FormControl(null),
      amount: new FormControl(0),
    })
  }

  get amountControl() {
    return this.transactionFormGroup.get("amount") as FormControl;
  }

  get destAccountIDControl() {
    return this.transactionFormGroup.get("destAccountId") as FormControl;
  }

  transferMoney() {
    this.bankService.transferMoney(this.bankAccount.bankId,
      this.transactionFormGroup.value.amount,
      this.transactionFormGroup.value.destAccountId).subscribe({
      next: result => {
        window.location.reload();
      },
      error: error => {
        this.transactionError = error.error.message;
      }
    })
  }
}
