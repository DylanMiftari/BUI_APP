import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Casino} from "../../../features/casino/models/casino.model";
import {SimpleCardComponent} from "../../atoms/simple-card/simple-card.component";
import {ThemedTitleComponent} from "../../atoms/themed-title/themed-title.component";
import {SimpleTextComponent} from "../../atoms/simple-text/simple-text.component";
import {CardContainerComponent} from "../../atoms/card-container/card-container.component";
import {IconComponent} from "../../atoms/icon/icon.component";
import {RowComponent} from "../../atoms/row/row.component";
import {CardComponent} from "../../organisms/card/card.component";
import {DataWithTextComponent} from "../../moleculs/data-with-text/data-with-text.component";
import {ButtonComponent} from "../../atoms/button/button.component";
import {CasinoGameCardComponent} from "../../moleculs/casino-game-card/casino-game-card.component";
import {ErrorTextComponent} from "../../atoms/error-text/error-text.component";

@Component({
  selector: 'app-casino-buy-ticket-template',
  standalone: true,
  imports: [
    SimpleCardComponent,
    ThemedTitleComponent,
    SimpleTextComponent,
    CardContainerComponent,
    IconComponent,
    RowComponent,
    CardComponent,
    DataWithTextComponent,
    ButtonComponent,
    CasinoGameCardComponent,
    ErrorTextComponent
  ],
  templateUrl: './casino-buy-ticket-template.component.html',
  styleUrl: './casino-buy-ticket-template.component.css',
})
export class CasinoBuyTicketTemplateComponent {
  @Input() casino!: Casino;
  @Input() buyError: string = "";

  @Output() buyRegularTicket = new EventEmitter();
  @Output() buyVIPTicket = new EventEmitter();

  buyRegularTicketMethod() {
    this.buyRegularTicket.emit();
  }

  buyVIPTicketMethod() {
    this.buyVIPTicket.emit();
  }
}
