import {Component, OnInit} from '@angular/core';
import {HeaderReturnButtonService} from "../../../../core/services/header-return-button.service";
import {BankService} from "../../services/bank.service";
import {Bank} from "../../models/bank.model";
import {ActivatedRoute} from "@angular/router";
import {
  OpenAccountTemplateComponent
} from "../../../../shared/templates/bank/open-account-template/open-account-template.component";

@Component({
  selector: 'app-open-account-pages',
  standalone: true,
  imports: [
    OpenAccountTemplateComponent
  ],
  templateUrl: './open-account-pages.component.html',
  styleUrl: './open-account-pages.component.css'
})
export class OpenAccountPagesComponent implements OnInit {
  public bank: Bank | null = null;
  public errorOnCreateAccount: string = "";

  constructor(
    private headerButton: HeaderReturnButtonService,
    private bankService: BankService,
    private route: ActivatedRoute,
  ) {
    headerButton.updateButton("🏠 Back to Dashboard", "/")
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let bankId = params["bank"];
      this.bankService.getBankInformation(bankId).subscribe({
        next: response => {
          this.bank = response;
        }
      })
    });
  }

  createAccount() {
    this.bankService.createBankAccount(this.bank!.id).subscribe({
      next: response => {
        window.location.href = "/bank/my-accounts";
      },
      error: error => {
        this.errorOnCreateAccount = error.error.message;
      }
    })
  }

}
