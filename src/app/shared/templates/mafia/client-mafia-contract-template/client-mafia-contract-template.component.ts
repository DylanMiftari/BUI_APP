import {Component, Input} from '@angular/core';
import {Mafia} from "../../../../features/mafia/models/mafia.model";
import {MafiaContract} from "../../../../features/mafia/models/mafia-contract.model";
import {PageTitleComponent} from "../../../atoms/page-title/page-title.component";
import {SimpleTextComponent} from "../../../atoms/simple-text/simple-text.component";
import {ContractCardComponent} from "../../../organisms/mafia/contract-card/contract-card.component";

@Component({
  selector: 'app-client-mafia-contract-template',
  standalone: true,
  imports: [
    PageTitleComponent,
    SimpleTextComponent,
    ContractCardComponent
  ],
  templateUrl: './client-mafia-contract-template.component.html',
  styleUrl: './client-mafia-contract-template.component.css'
})
export class ClientMafiaContractTemplateComponent {
  @Input() mafia!: Mafia;
  @Input() mafiaContract!: MafiaContract;
}
