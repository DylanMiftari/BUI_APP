import {Component, OnInit} from '@angular/core';
import {forkJoin} from "rxjs";
import {BankAccount} from "../../models/bank-account.model";
import {LoanRequest} from "../../models/loan-request.model";
import {HeaderReturnButtonService} from "../../../../core/services/header-return-button.service";
import {BankService} from "../../services/bank.service";
import {ActivatedRoute} from "@angular/router";
import {BankAccountTransaction} from "../../models/bank-account-transaction.model";
import {
  ClientBankTransactionsTemplatesComponent
} from "../../../../shared/templates/bank/client-bank-transactions-templates/client-bank-transactions-templates.component";

@Component({
  selector: 'app-client-see-transactions-pages',
  standalone: true,
  imports: [
    ClientBankTransactionsTemplatesComponent
  ],
  templateUrl: './client-see-transactions-pages.component.html',
  styleUrl: './client-see-transactions-pages.component.css'
})
export class ClientSeeTransactionsPagesComponent implements OnInit {
  bankAccount: BankAccount | null = null;
  transactions: BankAccountTransaction[] = [];

  constructor(
    private headerButtonService: HeaderReturnButtonService,
    private bankService: BankService,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let bankId = params['bank'];
      this.headerButtonService.updateButton("🏦 Back to Account", `/bank/${bankId}/account`);
      forkJoin({
        bankAccount: this.bankService.getBankAccount(bankId),
        transactions: this.bankService.getTransactions(bankId),
      }).subscribe({
        next: result => {
          this.bankAccount = result.bankAccount;
          this.transactions = result.transactions;
        }
      });
    });
  }
}
