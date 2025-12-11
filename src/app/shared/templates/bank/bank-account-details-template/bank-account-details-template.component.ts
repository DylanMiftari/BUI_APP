import {Component, Input} from '@angular/core';
import {BankAccount} from "../../../../features/bank/models/bank-account.model";
import {PageTitleComponent} from "../../../atoms/page-title/page-title.component";
import {CardContainerComponent} from "../../../atoms/card-container/card-container.component";
import {BankAccountCardComponent} from "../../../organisms/bank-account-card/bank-account-card.component";
import {CardComponent} from "../../../organisms/card/card.component";
import {RowComponent} from "../../../atoms/row/row.component";
import {IconComponent} from "../../../atoms/icon/icon.component";
import {SimpleTextComponent} from "../../../atoms/simple-text/simple-text.component";
import {SimpleCardComponent} from "../../../atoms/simple-card/simple-card.component";
import {DataWithTextComponent} from "../../../moleculs/data-with-text/data-with-text.component";
import {TransactionsBoxComponent} from "../../../organisms/bank/transactions-box/transactions-box.component";

@Component({
  selector: 'app-bank-account-details-template',
  standalone: true,
  imports: [
    PageTitleComponent,
    CardContainerComponent,
    BankAccountCardComponent,
    CardComponent,
    RowComponent,
    IconComponent,
    SimpleTextComponent,
    SimpleCardComponent,
    DataWithTextComponent,
    TransactionsBoxComponent
  ],
  templateUrl: './bank-account-details-template.component.html',
  styleUrl: './bank-account-details-template.component.css'
})
export class BankAccountDetailsTemplateComponent {
  @Input() bankAccount!: BankAccount;
}
