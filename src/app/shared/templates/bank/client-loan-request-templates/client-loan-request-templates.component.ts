import {Component, Input} from '@angular/core';
import {BankAccount} from "../../../../features/bank/models/bank-account.model";
import {LoanRequest} from "../../../../features/bank/models/loan-request.model";
import {PageTitleComponent} from "../../../atoms/page-title/page-title.component";
import {SimpleTextComponent} from "../../../atoms/simple-text/simple-text.component";
import {BankAccountCardComponent} from "../../../organisms/bank-account-card/bank-account-card.component";
import {TitleComponent} from "../../../atoms/title/title.component";
import {LoanRequestCardComponent} from "../../../organisms/bank/loan-request-card/loan-request-card.component";

@Component({
  selector: 'app-client-loan-request-templates',
  standalone: true,
  imports: [
    PageTitleComponent,
    SimpleTextComponent,
    BankAccountCardComponent,
    TitleComponent,
    LoanRequestCardComponent
  ],
  templateUrl: './client-loan-request-templates.component.html',
  styleUrl: './client-loan-request-templates.component.css'
})
export class ClientLoanRequestTemplatesComponent {
  @Input() bankAccount!: BankAccount;
  @Input() loanRequests: LoanRequest[] = [];
}
