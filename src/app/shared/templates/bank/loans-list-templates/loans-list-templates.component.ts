import {Component, Input, OnInit} from '@angular/core';
import {BankDashboard} from "../../../../features/bank/models/bank-dashboard.model";
import {LoanRequest} from "../../../../features/bank/models/loan-request.model";
import {ButtonComponent} from "../../../atoms/button/button.component";
import {CardComponent} from "../../../organisms/card/card.component";
import {RowComponent} from "../../../atoms/row/row.component";
import {SimpleTextComponent} from "../../../atoms/simple-text/simple-text.component";
import {ThemedTitleComponent} from "../../../atoms/themed-title/themed-title.component";
import {RouterLink} from "@angular/router";
import {bankConfig} from "../../../../core/config/bank.config";
import {ErrorTextComponent} from "../../../atoms/error-text/error-text.component";
import {LoanRequestCardComponent} from "../../../organisms/bank/loan-request-card/loan-request-card.component";

@Component({
  selector: 'app-loans-list-templates',
  standalone: true,
  imports: [
    ButtonComponent,
    CardComponent,
    RowComponent,
    SimpleTextComponent,
    ThemedTitleComponent,
    RouterLink,
    ErrorTextComponent,
    LoanRequestCardComponent
  ],
  templateUrl: './loans-list-templates.component.html',
  styleUrl: './loans-list-templates.component.css'
})
export class LoansListTemplatesComponent implements OnInit {
  @Input() bankDashboard!: BankDashboard;
  @Input() loansRequest!: LoanRequest[];

  buttonLinks: {label: string, link: string}[] = [];

  ngOnInit() {
    this.buttonLinks = [
      {'label': 'Bank Dashboard', 'link': '/bank/'+this.bankDashboard.bank.id+'/owner-dashboard'},
      {'label': 'Bank Settings', 'link': '/bank/'+this.bankDashboard.bank.id+'/config'},
      {'label': 'Accounts List', 'link': '/bank/'+this.bankDashboard.bank.id+'/accounts'},
    ];
  }

  protected readonly bankConfig = bankConfig;
}
