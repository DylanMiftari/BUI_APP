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
    SimpleCardComponent
  ],
  templateUrl: './transactions-box.component.html',
  styleUrl: './transactions-box.component.css'
})
export class TransactionsBoxComponent {
  @Input() bankAccount!: BankAccount;
  mode: "deposit" | "withdraw" = "deposit";
  transactionFormGroup: FormGroup;

  constructor() {
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
}
