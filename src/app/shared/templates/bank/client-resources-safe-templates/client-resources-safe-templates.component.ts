import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BankAccount} from "../../../../features/bank/models/bank-account.model";
import {BankAccountCardComponent} from "../../../organisms/bank-account-card/bank-account-card.component";
import {PageTitleComponent} from "../../../atoms/page-title/page-title.component";
import {SimpleTextComponent} from "../../../atoms/simple-text/simple-text.component";
import {CardComponent} from "../../../organisms/card/card.component";
import {ResourceCardComponent} from "../../../moleculs/resource-card/resource-card.component";
import {ResourceListComponent} from "../../../organisms/resource-list/resource-list.component";
import {ThemedTitleComponent} from "../../../atoms/themed-title/themed-title.component";
import {FormControl, FormGroup} from "@angular/forms";
import {ButtonComponent} from "../../../atoms/button/button.component";
import {ErrorTextComponent} from "../../../atoms/error-text/error-text.component";
import {UserResource} from "../../../../features/general/models/user-resource.model";

@Component({
  selector: 'app-client-resources-safe-templates',
  standalone: true,
  imports: [
    BankAccountCardComponent,
    PageTitleComponent,
    SimpleTextComponent,
    CardComponent,
    ResourceCardComponent,
    ResourceListComponent,
    ThemedTitleComponent,
    ButtonComponent,
    ErrorTextComponent
  ],
  templateUrl: './client-resources-safe-templates.component.html',
  styleUrl: './client-resources-safe-templates.component.css'
})
export class ClientResourcesSafeTemplatesComponent implements OnInit {
  @Input() bankAccount!: BankAccount;
  @Input() userResources!: UserResource[];
  @Input() withdrawError: string = "";
  @Input() depositError: string = "";
  @Output() withdrawResources = new EventEmitter<{resourceId: number, quantity:number}[]>();
  @Output() depositResources = new EventEmitter<{resourceId: number, quantity:number}[]>();
  formGroup: FormGroup = new FormGroup({});
  depositFormGroup: FormGroup = new FormGroup({});

  formGroupIsCreated = false;

  ngOnInit() {
    for (let resource of this.bankAccount!.resources!) {
      this.formGroup.addControl(resource.resource.id.toString(), new FormControl(0))
    }
    for (let resource of this.userResources!) {
      this.depositFormGroup.addControl(resource.resource.id.toString(), new FormControl(0))
    }
    this.formGroupIsCreated = true;
  }

  onWithdrawResources() {
    let data = [];
    for(let resource of this.bankAccount!.resources!) {
      data.push({
        resourceId: resource.resource.id,
        quantity: this.formGroup.value[resource.resource.id.toString()],
      });
    }
    this.withdrawResources.emit(data);
  }

  onDepositResources() {
    let data = [];
    for(let resource of this.userResources!) {
      data.push({
        resourceId: resource.resource.id,
        quantity: this.depositFormGroup.value[resource.resource.id.toString()],
      });
    }
    this.depositResources.emit(data);
  }
}
