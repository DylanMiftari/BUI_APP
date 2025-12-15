import {Component, Input} from '@angular/core';
import {BankAccountTransaction} from "../../../../features/bank/models/bank-account-transaction.model";
import {CardComponent} from "../../card/card.component";
import {RowComponent} from "../../../atoms/row/row.component";
import {SimpleTextComponent} from "../../../atoms/simple-text/simple-text.component";
import {PinComponent} from "../../../atoms/pin/pin.component";
import {StatusIndicatorComponent} from "../../../moleculs/status-indicator/status-indicator.component";
import {DataWithTextComponent} from "../../../moleculs/data-with-text/data-with-text.component";
import {DatePipe} from "@angular/common";
import {SimpleCardComponent} from "../../../atoms/simple-card/simple-card.component";

@Component({
  selector: 'app-bank-account-transaction-card',
  standalone: true,
  imports: [
    CardComponent,
    RowComponent,
    SimpleTextComponent,
    PinComponent,
    StatusIndicatorComponent,
    DataWithTextComponent,
    DatePipe,
    SimpleCardComponent
  ],
  templateUrl: './bank-account-transaction-card.component.html',
  styleUrl: './bank-account-transaction-card.component.css'
})
export class BankAccountTransactionCardComponent {
  @Input() transaction!: BankAccountTransaction;

  get typeText() {
    return this.transaction.isCredit ? 'Credit' : 'Debit';
  }
  get typeColor() {
    return this.transaction.isCredit ? "#059669" : "#dc2626";
  }

  get transferFee() {
    return Math.round(this.transaction.money * this.transaction.transferCost/100 * 100) / 100;
  }
}
