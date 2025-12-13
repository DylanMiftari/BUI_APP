import {Component, Input, OnInit} from '@angular/core';
import {LoanRequest} from "../../../../features/bank/models/loan-request.model";
import {CardComponent} from "../../card/card.component";
import {RowComponent} from "../../../atoms/row/row.component";
import {SimpleTextComponent} from "../../../atoms/simple-text/simple-text.component";
import {StatusIndicatorComponent} from "../../../moleculs/status-indicator/status-indicator.component";
import {SeperatorWithTextComponent} from "../../../atoms/seperator-with-text/seperator-with-text.component";
import {CardContainerComponent} from "../../../atoms/card-container/card-container.component";
import {SimpleCardComponent} from "../../../atoms/simple-card/simple-card.component";
import {DataWithTextComponent} from "../../../moleculs/data-with-text/data-with-text.component";
import {TitleComponent} from "../../../atoms/title/title.component";
import {ThemedTitleComponent} from "../../../atoms/themed-title/themed-title.component";
import {ProgressBarComponent} from "../../../atoms/progress-bar/progress-bar.component";
import {InputComponent} from "../../../atoms/input/input.component";
import {FormControl, FormGroup} from "@angular/forms";
import {TextareaComponent} from "../../../atoms/textarea/textarea.component";
import {ButtonComponent} from "../../../atoms/button/button.component";
import {ErrorTextComponent} from "../../../atoms/error-text/error-text.component";
import {BankService} from "../../../../features/bank/services/bank.service";
import {UserService} from "../../../../features/general/services/user.service";
import {DataUserService} from "../../../../core/services/data-user.service";

@Component({
  selector: 'app-loan-request-card',
  standalone: true,
  imports: [
    CardComponent,
    RowComponent,
    SimpleTextComponent,
    StatusIndicatorComponent,
    SeperatorWithTextComponent,
    CardContainerComponent,
    SimpleCardComponent,
    DataWithTextComponent,
    TitleComponent,
    ThemedTitleComponent,
    ProgressBarComponent,
    InputComponent,
    TextareaComponent,
    ButtonComponent,
    ErrorTextComponent
  ],
  templateUrl: './loan-request-card.component.html',
  styleUrl: './loan-request-card.component.css'
})
export class LoanRequestCardComponent implements OnInit {
  @Input() loanRequest!: LoanRequest;
  actionError: string = "";

  editLoanRequestForm: FormGroup = new FormGroup({});

  constructor(
    private bankService: BankService,
    private userService: DataUserService,
  ) {
  }

  ngOnInit() {
    this.editLoanRequestForm = new FormGroup({
      money: new FormControl(this.loanRequest.money),
      weeklyPayment: new FormControl(this.loanRequest.weeklypayment),
      rate: new FormControl(this.loanRequest.rate),
      description: new FormControl(null),
    });
  }

  get moneyControl() {
    return this.editLoanRequestForm.get("money") as FormControl;
  }
  get weeklyPaymentControl() {
    return this.editLoanRequestForm.get("weeklyPayment") as FormControl;
  }
  get rateControl() {
    return this.editLoanRequestForm.get("rate") as FormControl;
  }
  get descriptionControl() {
    return this.editLoanRequestForm.get("description") as FormControl;
  }

  get nbWeekToPay(): number {
    return Math.ceil(this.loanRequest.money / this.loanRequest.weeklypayment)
  }

  get statusText() {
    return this.loanRequest.status.toUpperCase();
  }

  get statusColor() {
    switch (this.loanRequest.status) {
      case "wait on bank":
      case "wait on client":
        return "#dfb50d";
      case "deny":
      case "canceled":
        return "#d51616";
      case "approved":
      case "payed":
        return "#77d819";
      case "paying":
        return "#0c54b3"
      default:
        return "#fec7c7"
    }
  }

  get isWaitingForClient() {
    return this.loanRequest.status === "wait on client";
  }

  cancelLoanRequest() {
    this.bankService.cancelLoanRequest(this.loanRequest.bankId, this.loanRequest.id).subscribe({
      next: () => {
        this.loanRequest.status = "canceled";
      },
      error: err => {
        this.actionError = err.error.message;
      }
    });
  }

  acceptLoanRequest() {
    this.bankService.acceptLoanRequest(this.loanRequest.bankId, this.loanRequest.id).subscribe({
      next: () => {
        this.loanRequest.status = "paying";
        this.userService.addPlayerMoney(this.loanRequest.money);
      },
      error: err => {
        this.actionError = err.error.message;
      }
    })
  }

  updateLoanRequest() {
    let money = this.editLoanRequestForm.value.money;
    let weeklyPayment = this.editLoanRequestForm.value.weeklyPayment;
    let rate = this.editLoanRequestForm.value.rate;
    let description = this.editLoanRequestForm.value.description;
    this.bankService.updateLoanRequest(this.loanRequest.bankId, this.loanRequest.id, money, weeklyPayment, description, rate).subscribe({
      next: () => {
        this.loanRequest.money = money;
        this.loanRequest.weeklypayment = weeklyPayment;
        this.loanRequest.rate = rate;
        this.loanRequest.description += "\n---\n"+description;
        this.loanRequest.status = "wait on bank";
      },
      error: err => {
        this.actionError = err.error.message;
      }
    });
  }
}
