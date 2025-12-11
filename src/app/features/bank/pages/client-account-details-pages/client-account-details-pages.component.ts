import {Component, OnInit} from '@angular/core';
import {
  CasinoClientDashboardTemplateComponent
} from "../../../../shared/templates/casino-client-dashboard-template/casino-client-dashboard-template.component";
import {HeaderReturnButtonService} from "../../../../core/services/header-return-button.service";
import {
  BankAccountDetailsTemplateComponent
} from "../../../../shared/templates/bank/bank-account-details-template/bank-account-details-template.component";
import {BankService} from "../../services/bank.service";
import {ActivatedRoute} from "@angular/router";
import {BankAccount} from "../../models/bank-account.model";

@Component({
  selector: 'app-client-account-details-pages',
  standalone: true,
  imports: [
    CasinoClientDashboardTemplateComponent,
    BankAccountDetailsTemplateComponent
  ],
  templateUrl: './client-account-details-pages.component.html',
  styleUrl: './client-account-details-pages.component.css'
})
export class ClientAccountDetailsPagesComponent implements OnInit {
  bankAccount: BankAccount | null = null;

  constructor(
    private headerButton: HeaderReturnButtonService,
    private bankService: BankService,
    private route: ActivatedRoute,
  ) {
    headerButton.updateButton("💵 Back to My Accounts", "/bank/my-accounts")
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let bankId = params["bank"];
      this.bankService.getBankAccount(bankId).subscribe({
        next: result => {
          this.bankAccount = result;
        }
      });
    });
  }
}
