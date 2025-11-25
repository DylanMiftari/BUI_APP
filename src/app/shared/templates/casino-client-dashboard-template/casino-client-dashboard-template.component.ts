import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CasinoTicket} from "../../../features/casino/models/casino-ticket.model";
import {SimpleCardComponent} from "../../atoms/simple-card/simple-card.component";
import {TitleComponent} from "../../atoms/title/title.component";
import {ThemedTitleComponent} from "../../atoms/themed-title/themed-title.component";
import {SimpleTextComponent} from "../../atoms/simple-text/simple-text.component";
import {RowComponent} from "../../atoms/row/row.component";
import {PinComponent} from "../../atoms/pin/pin.component";
import {CardContainerComponent} from "../../atoms/card-container/card-container.component";
import {CasinoGameCardComponent} from "../../moleculs/casino-game-card/casino-game-card.component";

@Component({
  selector: 'app-casino-client-dashboard-template',
  standalone: true,
  imports: [
    SimpleCardComponent,
    TitleComponent,
    ThemedTitleComponent,
    SimpleTextComponent,
    RowComponent,
    PinComponent,
    CardContainerComponent,
    CasinoGameCardComponent
  ],
  templateUrl: './casino-client-dashboard-template.component.html',
  styleUrl: './casino-client-dashboard-template.component.css'
})
export class CasinoClientDashboardTemplateComponent {
  @Input() casinoTicket!: CasinoTicket;
  @Output() playGameCard = new EventEmitter<string>();

  get theme() {
    return this.casinoTicket.isVIP ? "casino-vip" : "casino-regular";
  }
  get status() {
    return this.casinoTicket.isVIP ? "VIP" : "Regular";
  }

  clickOnPlayCard(game: string) {
    this.playGameCard.emit(game);
  }
}
