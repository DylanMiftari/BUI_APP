import {Component, Input} from '@angular/core';
import {CardComponent} from "../../card/card.component";
import {InputComponent} from "../../../atoms/input/input.component";
import {FormControl, FormGroup} from "@angular/forms";
import {TextareaComponent} from "../../../atoms/textarea/textarea.component";
import {ButtonComponent} from "../../../atoms/button/button.component";
import {ErrorTextComponent} from "../../../atoms/error-text/error-text.component";
import {BankService} from "../../../../features/bank/services/bank.service";

@Component({
  selector: 'app-create-loan-request-form',
  standalone: true,
  imports: [
    CardComponent,
    InputComponent,
    TextareaComponent,
    ButtonComponent,
    ErrorTextComponent
  ],
  templateUrl: './create-loan-request-form.component.html',
  styleUrl: './create-loan-request-form.component.css'
})
export class CreateLoanRequestFormComponent {
  @Input() bankId!: number;
  loanFormGroup: FormGroup;
  loanError: string = "";

  constructor(
    private bankService: BankService,
  ) {
    this.loanFormGroup = new FormGroup({
      money: new FormControl(null),
      weeklyPayment: new FormControl(null),
      rate: new FormControl(null),
      description: new FormControl(null),
    });
  }

  get moneyFormControl() {
    return this.loanFormGroup.get("money") as FormControl;
  }
  get weeklyPaymentFormControl() {
    return this.loanFormGroup.get("weeklyPayment") as FormControl;
  }
  get rateFormControl() {
    return this.loanFormGroup.get("rate") as FormControl;
  }
  get descriptionFormControl() {
    return this.loanFormGroup.get("description") as FormControl;
  }

  createLoanRequest() {
    this.bankService.createLoanRequest(
      this.bankId,
      this.loanFormGroup.value.money,
      this.loanFormGroup.value.weeklyPayment,
      this.loanFormGroup.value.description,
      this.loanFormGroup.value.rate
    ).subscribe({
      next: () => {
        window.location.reload();
      },
      error: error => {
        this.loanError = error.error.message;
      }
    });
  }
}
