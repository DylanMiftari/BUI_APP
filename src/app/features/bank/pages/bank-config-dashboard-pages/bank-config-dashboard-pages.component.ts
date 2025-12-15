import {Component, OnInit} from '@angular/core';
import {BankDashboard} from "../../models/bank-dashboard.model";
import {HeaderReturnButtonService} from "../../../../core/services/header-return-button.service";
import {BankOwnerService} from "../../services/bank-owner.service";
import {ActivatedRoute} from "@angular/router";
import {
  BankConfigTemplatesComponent
} from "../../../../shared/templates/bank/bank-config-templates/bank-config-templates.component";

@Component({
  selector: 'app-bank-config-dashboard-pages',
  standalone: true,
  imports: [
    BankConfigTemplatesComponent
  ],
  templateUrl: './bank-config-dashboard-pages.component.html',
  styleUrl: './bank-config-dashboard-pages.component.css'
})
export class BankConfigDashboardPagesComponent implements OnInit {
  bankDashboard: BankDashboard | null = null;
  updateError: string = "";

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
      this.bankService.getDashboardData(bankId).subscribe(data => {
        this.bankDashboard = data;
      })
    });
  }

  updateConfig(data: any) {
    this.bankService.updateConfiguration(this.bankDashboard!.bank.id,
      data.accountMaintenanceCost, data.transferCost, data.maxAccountMoney,
      data.maxAccountResource).subscribe({
      next: _ => {
        window.location.reload();
      },
      error: err => {
        this.updateError = err.error.message;
      }
    });
  }
}
