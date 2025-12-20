import {Component, OnInit} from '@angular/core';
import {BankDashboard} from "../../models/bank-dashboard.model";
import {LoanRequest} from "../../models/loan-request.model";
import {HeaderReturnButtonService} from "../../../../core/services/header-return-button.service";
import {BankOwnerService} from "../../services/bank-owner.service";
import {ActivatedRoute} from "@angular/router";
import {forkJoin} from "rxjs";
import {
  LoansListTemplatesComponent
} from "../../../../shared/templates/bank/loans-list-templates/loans-list-templates.component";

@Component({
  selector: 'app-bank-loans-list-pages',
  standalone: true,
  imports: [
    LoansListTemplatesComponent
  ],
  templateUrl: './bank-loans-list-pages.component.html',
  styleUrl: './bank-loans-list-pages.component.css'
})
export class BankLoansListPagesComponent implements OnInit {
  bankDashboard: BankDashboard | null = null;
  loansRequest: LoanRequest[] = [];

  constructor(
    private headerButton: HeaderReturnButtonService,
    private bankService: BankOwnerService,
    private route: ActivatedRoute,
  ) {
    headerButton.updateButton("🏢 Back to Business", "/company")
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let bankId = params["bank"];
      forkJoin({
        bankDashboard: this.bankService.getDashboardData(bankId),
        loansRequest: this.bankService.getLoansRequest(bankId)
      }).subscribe({
        next: result => {
          this.bankDashboard = result.bankDashboard;
          this.loansRequest = result.loansRequest;
        }
      });
    });
  }
}
