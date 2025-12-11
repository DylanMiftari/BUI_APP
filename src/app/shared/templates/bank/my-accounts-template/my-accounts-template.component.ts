import {Component, Input} from '@angular/core';
import {BankAccount} from "../../../../features/bank/models/bank-account.model";
import {ThemedTitleComponent} from "../../../atoms/themed-title/themed-title.component";
import {SimpleTextComponent} from "../../../atoms/simple-text/simple-text.component";
import {TitleComponent} from "../../../atoms/title/title.component";
import {CardContainerComponent} from "../../../atoms/card-container/card-container.component";
import {BankAccountCardComponent} from "../../../organisms/bank-account-card/bank-account-card.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-my-accounts-template',
  standalone: true,
  imports: [
    ThemedTitleComponent,
    SimpleTextComponent,
    TitleComponent,
    CardContainerComponent,
    BankAccountCardComponent
  ],
  templateUrl: './my-accounts-template.component.html',
  styleUrl: './my-accounts-template.component.css'
})
export class MyAccountsTemplateComponent {
  @Input() bankAccounts: BankAccount[] = [];

  constructor(
    private router: Router,
  ) {
  }

  clickOnAccount(bankAccount: BankAccount) {
    this.router.navigate([`/bank/${bankAccount.bankId}/account`]);
  }
}
