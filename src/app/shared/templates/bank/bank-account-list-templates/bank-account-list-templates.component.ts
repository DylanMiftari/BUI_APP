import {Component, Input, OnInit} from '@angular/core';
import {BankAccount} from "../../../../features/bank/models/bank-account.model";
import {ButtonComponent} from "../../../atoms/button/button.component";
import {CardComponent} from "../../../organisms/card/card.component";
import {RowComponent} from "../../../atoms/row/row.component";
import {SimpleTextComponent} from "../../../atoms/simple-text/simple-text.component";
import {ThemedTitleComponent} from "../../../atoms/themed-title/themed-title.component";
import {RouterLink} from "@angular/router";
import {BankDashboard} from "../../../../features/bank/models/bank-dashboard.model";
import {CardContainerComponent} from "../../../atoms/card-container/card-container.component";
import {BankAccountCardComponent} from "../../../organisms/bank-account-card/bank-account-card.component";

@Component({
  selector: 'app-bank-account-list-templates',
  standalone: true,
  imports: [
    ButtonComponent,
    CardComponent,
    RowComponent,
    SimpleTextComponent,
    ThemedTitleComponent,
    RouterLink,
    CardContainerComponent,
    BankAccountCardComponent
  ],
  templateUrl: './bank-account-list-templates.component.html',
  styleUrl: './bank-account-list-templates.component.css'
})
export class BankAccountListTemplatesComponent implements OnInit {
  @Input() bankAccounts: BankAccount[] = [];
  @Input() bankDashboard!: BankDashboard;

  buttonLinks: {label: string, link: string}[] = [];

  ngOnInit() {
    this.buttonLinks = [
      {'label': 'Bank Dashboard', 'link': '/bank/'+this.bankDashboard.bank.id+'/owner-dashboard'},
      {'label': 'Bank Settings', 'link': '/bank/'+this.bankDashboard.bank.id+'/config'},
    ];
  }
}
