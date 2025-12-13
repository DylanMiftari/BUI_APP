import {Component, OnInit} from '@angular/core';
import {HeaderReturnButtonService} from "../../../../core/services/header-return-button.service";
import {BankService} from "../../services/bank.service";
import {ActivatedRoute} from "@angular/router";
import {forkJoin} from "rxjs";
import {BankAccount} from "../../models/bank-account.model";
import {LoanRequest} from "../../models/loan-request.model";
import {
  ClientLoanRequestTemplatesComponent
} from "../../../../shared/templates/bank/client-loan-request-templates/client-loan-request-templates.component";

@Component({
  selector: 'app-client-loan-request-pages',
  standalone: true,
  imports: [
    ClientLoanRequestTemplatesComponent
  ],
  templateUrl: './client-loan-request-pages.component.html',
  styleUrl: './client-loan-request-pages.component.css'
})
export class ClientLoanRequestPagesComponent implements OnInit {
  bankAccount: BankAccount | null = null;
  loanRequests: LoanRequest[] = [];

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
        loanRequests: this.bankService.getLoanRequest(bankId),
      }).subscribe({
        next: result => {
          this.bankAccount = result.bankAccount;
          this.loanRequests = result.loanRequests;
        }
      });
    });
  }
}
