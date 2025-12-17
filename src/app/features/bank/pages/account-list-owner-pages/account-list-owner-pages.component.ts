import {Component, OnInit} from '@angular/core';
import {BankAccount} from "../../models/bank-account.model";
import {
  BankAccountListTemplatesComponent
} from "../../../../shared/templates/bank/bank-account-list-templates/bank-account-list-templates.component";
import {HeaderReturnButtonService} from "../../../../core/services/header-return-button.service";
import {BankOwnerService} from "../../services/bank-owner.service";
import {ActivatedRoute} from "@angular/router";
import {BankDashboard} from "../../models/bank-dashboard.model";
import {forkJoin} from "rxjs";

@Component({
  selector: 'app-account-list-owner-pages',
  standalone: true,
  imports: [
    BankAccountListTemplatesComponent
  ],
  templateUrl: './account-list-owner-pages.component.html',
  styleUrl: './account-list-owner-pages.component.css'
})
export class AccountListOwnerPagesComponent implements OnInit {
  bankAccounts: BankAccount[] = [];
  bankDashboard: BankDashboard | null = null;

  constructor(
    private headerButton: HeaderReturnButtonService,
    private bankService: BankOwnerService,
    private route: ActivatedRoute,
  ) {
    headerButton.updateButton("🏢 Back to Business", "/company")
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let bankId = params['bank'];
      forkJoin({
        bankDashboard: this.bankService.getDashboardData(bankId),
        bankAccounts: this.bankService.getBankAccounts(bankId)
      }).subscribe({
        next: result => {
          this.bankDashboard = result.bankDashboard;
          this.bankAccounts = result.bankAccounts;
        }
      });
    });
  }
}
