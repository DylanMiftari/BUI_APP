import {Component, Input} from '@angular/core';
import {CardComponent} from "../../card/card.component";
import {IconComponent} from "../../../atoms/icon/icon.component";
import {RowComponent} from "../../../atoms/row/row.component";
import {SimpleTextComponent} from "../../../atoms/simple-text/simple-text.component";
import {BankAccount} from "../../../../features/bank/models/bank-account.model";
import {ButtonComponent} from "../../../atoms/button/button.component";
import {FormControl, FormGroup} from "@angular/forms";
import {InputComponent} from "../../../atoms/input/input.component";
import {SimpleCardComponent} from "../../../atoms/simple-card/simple-card.component";
import {BankService} from "../../../../features/bank/services/bank.service";
import {ErrorTextComponent} from "../../../atoms/error-text/error-text.component";

@Component({
  selector: 'app-transactions-box',
  standalone: true,
  imports: [
    CardComponent,
    IconComponent,
    RowComponent,
    SimpleTextComponent,
    ButtonComponent,
    InputComponent,
    SimpleCardComponent,
    ErrorTextComponent
  ],
  templateUrl: './transactions-box.component.html',
  styleUrl: './transactions-box.component.css'
})
export class TransactionsBoxComponent {
  @Input() bankAccount!: BankAccount;
  mode: "deposit" | "withdraw" = "deposit";
  transactionFormGroup: FormGroup;
  debitError: string = "";
  creditError: string = "";

  constructor(
    private bankService: BankService,
  ) {
    this.transactionFormGroup = new FormGroup({
      amount: new FormControl(0)
    })
  }

  get amountControl() {
    return this.transactionFormGroup.get("amount") as FormControl;
  }

  changeMode(newMode: "deposit" | "withdraw") {
    this.mode = newMode;
  }

  creditAccount() {
    this.bankService.creditAccount(this.bankAccount.bankId,
      this.transactionFormGroup.value.amount).subscribe({
      next: result => {
        window.location.reload();
      },
      error: error => {
        this.creditError = error.error.message;
      }
    })
  }

  debitAccount() {
    this.bankService.debitAccount(this.bankAccount.bankId,
      this.transactionFormGroup.value.amount).subscribe({
      next: result => {
        window.location.reload();
      },
      error: error => {
        this.debitError = error.error.message;
      }
    })
  }

  doAction() {
    if(this.mode === "withdraw") {
      this.debitAccount();
    } else {
      this.creditAccount();
    }
  }
}
