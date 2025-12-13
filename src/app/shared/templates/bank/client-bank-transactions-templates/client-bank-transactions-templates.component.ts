import {Component, Input} from '@angular/core';
import {BankAccount} from "../../../../features/bank/models/bank-account.model";
import {BankAccountTransaction} from "../../../../features/bank/models/bank-account-transaction.model";
import {PageTitleComponent} from "../../../atoms/page-title/page-title.component";
import {BankAccountCardComponent} from "../../../organisms/bank-account-card/bank-account-card.component";
import {TitleComponent} from "../../../atoms/title/title.component";
import {
  BankAccountTransactionCardComponent
} from "../../../organisms/bank/bank-account-transaction-card/bank-account-transaction-card.component";

@Component({
  selector: 'app-client-bank-transactions-templates',
  standalone: true,
  imports: [
    PageTitleComponent,
    BankAccountCardComponent,
    TitleComponent,
    BankAccountTransactionCardComponent
  ],
  templateUrl: './client-bank-transactions-templates.component.html',
  styleUrl: './client-bank-transactions-templates.component.css'
})
export class ClientBankTransactionsTemplatesComponent {
  @Input() bankAccount!: BankAccount;
  @Input() transactions: BankAccountTransaction[] = [];
}
