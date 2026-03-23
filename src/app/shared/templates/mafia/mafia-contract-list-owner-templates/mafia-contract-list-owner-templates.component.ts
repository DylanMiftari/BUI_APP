import {Component, Input} from '@angular/core';
import {Mafia} from "../../../../features/mafia/models/mafia.model";
import {ButtonComponent} from "../../../atoms/button/button.component";
import {CardComponent} from "../../../organisms/card/card.component";
import {RowComponent} from "../../../atoms/row/row.component";
import {ThemedTitleComponent} from "../../../atoms/themed-title/themed-title.component";
import {Router} from "@angular/router";
import {SimpleTextComponent} from "../../../atoms/simple-text/simple-text.component";
import {CardContainerComponent} from "../../../atoms/card-container/card-container.component";
import {ContractCardComponent} from "../../../organisms/mafia/contract-card/contract-card.component";

@Component({
  selector: 'app-mafia-contract-list-owner-templates',
  standalone: true,
  imports: [
    ButtonComponent,
    CardComponent,
    RowComponent,
    ThemedTitleComponent,
    SimpleTextComponent,
    CardContainerComponent,
    ContractCardComponent
  ],
  templateUrl: './mafia-contract-list-owner-templates.component.html',
  styleUrl: './mafia-contract-list-owner-templates.component.css'
})
export class MafiaContractListOwnerTemplatesComponent {
  @Input() mafia!: Mafia;

  constructor(
    private router: Router
  ) {
  }

  onClickOnDashboard() {
    this.router.navigate([`/mafia/${this.mafia.id}/owner-dashboard`]);
  }
}
