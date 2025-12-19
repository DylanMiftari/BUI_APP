import {Component, OnInit} from '@angular/core';
import {HeaderReturnButtonService} from "../../../../core/services/header-return-button.service";
import {BankOwnerService} from "../../services/bank-owner.service";
import {ActivatedRoute} from "@angular/router";
import {BankDashboard} from "../../models/bank-dashboard.model";
import {BankAccount} from "../../models/bank-account.model";
import {forkJoin} from "rxjs";
import {
  AccountDetailsConfigTemplatesComponent
} from "../../../../shared/templates/bank/account-details-config-templates/account-details-config-templates.component";

@Component({
  selector: 'app-bank-account-details-config-pages',
  standalone: true,
  imports: [
    AccountDetailsConfigTemplatesComponent
  ],
  templateUrl: './bank-account-details-config-pages.component.html',
  styleUrl: './bank-account-details-config-pages.component.css'
})
export class BankAccountDetailsConfigPagesComponent implements OnInit {
  bankDashboard: BankDashboard | null = null;
  bankAccount: BankAccount | null = null;
  updateError: string = "";

  constructor(
    private headerButton: HeaderReturnButtonService,
    private bankService: BankOwnerService,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let bankId = params['bank'];
      let bankAccountId = params['bankAccount'];
      this.headerButton.updateButton("🏦 Back to Account List", `/bank/${bankId}/accounts`);

      forkJoin({
        bankDashboard: this.bankService.getDashboardData(bankId),
        bankAccount: this.bankService.getBankAccountDetails(bankId, bankAccountId)
      }).subscribe({
        next: (result) => {
          this.bankDashboard = result.bankDashboard;
          this.bankAccount = result.bankAccount;
        }
      });
    });
  }

  updateBankAccountConfig(data: any) {
    this.bankService.updateBankAccountConfig(this.bankDashboard!.bank.id, this.bankAccount!.id,
      data.accountMaintenanceCost, data.transferCost, data.maxMoney, data.maxResource).subscribe({
      next: _ => {
        window.location.reload();
      },
      error: err => {
        this.updateError = err.error.message;
      }
    });
  }

}
