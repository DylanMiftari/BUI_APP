import {Component, OnInit} from '@angular/core';
import {BankDashboard} from "../../models/bank-dashboard.model";
import {ActivatedRoute, Router} from "@angular/router";
import {HeaderReturnButtonService} from "../../../../core/services/header-return-button.service";
import {BankOwnerService} from "../../services/bank-owner.service";
import {
  BankDashboardTemplateComponent
} from "../../../../shared/templates/bank/bank-dashboard-template/bank-dashboard-template.component";

@Component({
  selector: 'app-bank-dashboard-pages',
  standalone: true,
  imports: [
    BankDashboardTemplateComponent
  ],
  templateUrl: './bank-dashboard-pages.component.html',
  styleUrl: './bank-dashboard-pages.component.css'
})
export class BankDashboardPagesComponent implements OnInit {
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
      this.bankService.getDashboardData(bankId).subscribe(data => {
        this.bankDashboard = data;
      })
    });
  }
}
