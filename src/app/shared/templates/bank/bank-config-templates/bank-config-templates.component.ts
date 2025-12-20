import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BankDashboard} from "../../../../features/bank/models/bank-dashboard.model";
import {ButtonComponent} from "../../../atoms/button/button.component";
import {CardComponent} from "../../../organisms/card/card.component";
import {RowComponent} from "../../../atoms/row/row.component";
import {SimpleTextComponent} from "../../../atoms/simple-text/simple-text.component";
import {ThemedTitleComponent} from "../../../atoms/themed-title/themed-title.component";
import {Router, RouterLink} from "@angular/router";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {InputComponent} from "../../../atoms/input/input.component";
import {ErrorTextComponent} from "../../../atoms/error-text/error-text.component";

@Component({
  selector: 'app-bank-config-templates',
  standalone: true,
  imports: [
    ButtonComponent,
    CardComponent,
    RowComponent,
    SimpleTextComponent,
    ThemedTitleComponent,
    RouterLink,
    InputComponent,
    ErrorTextComponent
  ],
  templateUrl: './bank-config-templates.component.html',
  styleUrl: './bank-config-templates.component.css'
})
export class BankConfigTemplatesComponent implements OnInit {
  @Input() bankDashboard!: BankDashboard;
  @Input() updateError: string = "";
  @Output() onChangeConfig = new EventEmitter<{accountMaintenanceCost: number, transferCost: number,
    maxAccountMoney: number, maxAccountResource: number}>();
  buttonLinks: {label: string, link: string}[] = [];

  formGroup: FormGroup = new FormGroup({});

  constructor(
  ) {
  }

  get accountMaintenanceCostControl() {
    return this.formGroup.get("accountMaintenanceCost") as FormControl;
  }
  get transferCostControl() {
    return this.formGroup.get("transferCost") as FormControl;
  }
  get maxAccountMoneyControl() {
    return this.formGroup.get("maxAccountMoney") as FormControl;
  }
  get maxAccountResourceControl() {
    return this.formGroup.get("maxAccountResource") as FormControl;
  }

  get maxMaxAccountMoney() {
    return this.bankDashboard.bankLevel[this.bankDashboard.bank.level - 1].maxMoneyAccount;
  }
  get maxMaxAccountResource() {
    return this.bankDashboard.bankLevel[this.bankDashboard.bank.level - 1].maxResourceAccount;
  }

  ngOnInit() {
    this.buttonLinks = [
      {'label': 'Bank Dashboard', 'link': '/bank/'+this.bankDashboard.bank.id+'/owner-dashboard'},
      {'label': 'Accounts List', 'link': '/bank/'+this.bankDashboard.bank.id+'/accounts'},
      {'label': 'Loans Requests', 'link': '/bank/'+this.bankDashboard.bank.id+'/loans'},
    ];
    this.formGroup = new FormGroup({
      accountMaintenanceCost: new FormControl(this.bankDashboard.config.accountMaintenanceCost),
      transferCost: new FormControl(this.bankDashboard.config.transferCost),
      maxAccountMoney: new FormControl(this.bankDashboard.config.maxAccountMoney),
      maxAccountResource: new FormControl(this.bankDashboard.config.maxAccountResource),
    });
  }

  updateConfig() {
    this.onChangeConfig.emit({
      accountMaintenanceCost: this.formGroup.value.accountMaintenanceCost,
      transferCost: this.formGroup.value.transferCost,
      maxAccountMoney: this.formGroup.value.maxAccountMoney,
      maxAccountResource: this.formGroup.value.maxAccountResource
    });
  }
}
