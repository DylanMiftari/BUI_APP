import {Component, Input} from '@angular/core';
import {MafiaContract} from "../../../../features/mafia/models/mafia-contract.model";
import {PageTitleComponent} from "../../../atoms/page-title/page-title.component";
import {CardContainerComponent} from "../../../atoms/card-container/card-container.component";
import {ContractCardComponent} from "../../../organisms/mafia/contract-card/contract-card.component";

@Component({
  selector: 'app-player-contracts-list-templates',
  standalone: true,
  imports: [
    PageTitleComponent,
    CardContainerComponent,
    ContractCardComponent
  ],
  templateUrl: './player-contracts-list-templates.component.html',
  styleUrl: './player-contracts-list-templates.component.css'
})
export class PlayerContractsListTemplatesComponent {
  @Input() contracts!: MafiaContract[];
}
