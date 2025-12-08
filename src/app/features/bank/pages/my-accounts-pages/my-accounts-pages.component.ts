import {Component, OnInit} from '@angular/core';
import {HeaderReturnButtonService} from "../../../../core/services/header-return-button.service";
import {BankService} from "../../services/bank.service";
import {BankAccount} from "../../models/bank-account.model";
import {
  MyAccountsTemplateComponent
} from "../../../../shared/templates/bank/my-accounts-template/my-accounts-template.component";

@Component({
  selector: 'app-my-accounts-pages',
  standalone: true,
  imports: [
    MyAccountsTemplateComponent
  ],
  templateUrl: './my-accounts-pages.component.html',
  styleUrl: './my-accounts-pages.component.css'
})
export class MyAccountsPagesComponent implements OnInit {
  public bankAccounts: BankAccount[] = [];

  constructor(
    private headerButton: HeaderReturnButtonService,
    private bankService: BankService,
  ) {
    headerButton.updateButton("🏠 Back to Dashboard", "/")
  }

  ngOnInit() {
    this.bankService.getUserBankAccounts().subscribe({
      next: data => {
        this.bankAccounts = data;
      }
    });
  }

}
