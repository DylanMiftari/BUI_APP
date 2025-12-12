import {Component, Input} from '@angular/core';
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
    ProgressBarComponent
  ],
  templateUrl: './loan-request-card.component.html',
  styleUrl: './loan-request-card.component.css'
})
export class LoanRequestCardComponent {
  @Input() loanRequest!: LoanRequest;

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
}
