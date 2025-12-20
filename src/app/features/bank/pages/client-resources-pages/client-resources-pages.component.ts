import {Component, OnInit} from '@angular/core';
import {BankAccount} from "../../models/bank-account.model";
import {HeaderReturnButtonService} from "../../../../core/services/header-return-button.service";
import {BankService} from "../../services/bank.service";
import {ActivatedRoute} from "@angular/router";
import {
  ClientResourcesSafeTemplatesComponent
} from "../../../../shared/templates/bank/client-resources-safe-templates/client-resources-safe-templates.component";
import {ResourceService} from "../../../general/services/resource.service";
import {forkJoin} from "rxjs";
import {UserResource} from "../../../general/models/user-resource.model";

@Component({
  selector: 'app-client-resources-pages',
  standalone: true,
  imports: [
    ClientResourcesSafeTemplatesComponent
  ],
  templateUrl: './client-resources-pages.component.html',
  styleUrl: './client-resources-pages.component.css'
})
export class ClientResourcesPagesComponent implements OnInit {
  bankAccount: BankAccount | null = null;
  userResources: UserResource[] | null = null;
  withdrawError: string = "";
  depositError: string = "";

  constructor(
    private headerButtonService: HeaderReturnButtonService,
    private bankService: BankService,
    private route: ActivatedRoute,
    private resourceService: ResourceService
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let bankId = params['bank'];
      this.headerButtonService.updateButton("🏛️ Back To Account", `/bank/${bankId}/account`);
      forkJoin({
        bankAccount: this.bankService.getBankAccountWithResources(bankId),
        userResource: this.resourceService.getUserResources()
      }).subscribe({
        next: result => {
          this.bankAccount = result.bankAccount;
          this.userResources = result.userResource
        }
      });
    })
  }

  withdraw(data: {resourceId: number, quantity: number}[]) {
    this.bankService.withDrawResource(this.bankAccount!.bankId, data).subscribe({
      next: _ => {
        window.location.reload();
      },
      error: err => {
        this.withdrawError = err.error.message;
      }
    })
  }

  deposit(data: {resourceId: number, quantity: number}[]) {
    this.bankService.depositResource(this.bankAccount!.bankId, data).subscribe({
      next: _ => {
        window.location.reload();
      },
      error: err => {
        this.depositError = err.error.message;
      }
    })
  }
}
