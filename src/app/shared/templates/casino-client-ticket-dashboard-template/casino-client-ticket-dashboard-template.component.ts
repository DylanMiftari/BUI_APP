import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CasinoTitleComponent} from "../../moleculs/casino-title/casino-title.component";
import {SimpleCardComponent} from "../../atoms/simple-card/simple-card.component";
import {CasinoTicket} from "../../../features/casino/models/casino-ticket.model";
import {SimpleTextComponent} from "../../atoms/simple-text/simple-text.component";
import {RowComponent} from "../../atoms/row/row.component";
import {PinComponent} from "../../atoms/pin/pin.component";
import {ThemeColor} from "../../../core/themeColor/theme-color-type";
import {IconComponent} from "../../atoms/icon/icon.component";
import {SeperatorWithTextComponent} from "../../atoms/seperator-with-text/seperator-with-text.component";
import {CardContainerComponent} from "../../atoms/card-container/card-container.component";
import {CardComponent} from "../../organisms/card/card.component";
import {DatePipe} from "@angular/common";
import {ButtonComponent} from "../../atoms/button/button.component";
import {LevelPinComponent} from "../../atoms/level-pin/level-pin.component";
import {RouterLink} from "@angular/router";
import {ThemeColorService} from "../../../core/themeColor/theme-color.service";

@Component({
  selector: 'app-casino-client-ticket-dashboard-template',
  standalone: true,
  imports: [
    CasinoTitleComponent,
    SimpleCardComponent,
    SimpleTextComponent,
    RowComponent,
    PinComponent,
    IconComponent,
    SeperatorWithTextComponent,
    CardContainerComponent,
    CardComponent,
    DatePipe,
    ButtonComponent,
    LevelPinComponent,
    RouterLink
  ],
  templateUrl: './casino-client-ticket-dashboard-template.component.html',
  styleUrl: './casino-client-ticket-dashboard-template.component.css'
})
export class CasinoClientTicketDashboardTemplateComponent {
  @Input() public ticketList!: CasinoTicket[];

  @Output() public accessToCasino = new EventEmitter<number>();

  constructor(public themeService: ThemeColorService) {
  }

  getTicketStatus(ticket: CasinoTicket): string {
    return ticket.isVIP ? "VIP" : "Regular";
  }
  getColorTheme(ticket: CasinoTicket): ThemeColor {
    return ticket.isVIP ? "casino-vip" : "casino-regular";
  }
  getTicketEmoji(ticket: CasinoTicket): string {
    return ticket.isVIP ? "🎭" : "🎫"
  }

  clickOnTicket(ticket: CasinoTicket): void {
    this.accessToCasino.emit(ticket.casino.id);
  }
}
