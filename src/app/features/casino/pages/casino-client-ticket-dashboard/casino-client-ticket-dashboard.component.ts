import {Component, OnInit} from '@angular/core';
import {HeaderReturnButtonService} from "../../../../core/services/header-return-button.service";
import {
  CasinoClientTicketDashboardTemplateComponent
} from "../../../../shared/templates/casino-client-ticket-dashboard-template/casino-client-ticket-dashboard-template.component";
import {CasinoTicket} from "../../models/casino-ticket.model";
import {CasinoClientService} from "../../services/casino-client-service";

@Component({
  selector: 'app-casino-client-ticket-dashboard',
  standalone: true,
  imports: [
    CasinoClientTicketDashboardTemplateComponent
  ],
  templateUrl: './casino-client-ticket-dashboard.component.html',
  styleUrl: './casino-client-ticket-dashboard.component.css'
})
export class CasinoClientTicketDashboardComponent implements OnInit {
  public casinoTickets: CasinoTicket[] = [];

  constructor(
    private returnButtonService: HeaderReturnButtonService,
    private casinoClientService: CasinoClientService
  ) {
    returnButtonService.updateButton("🏠 Back to Dashboard", "/");
  }

  ngOnInit(): void {
    this.casinoClientService.getUserTickets().subscribe({
      next: data => {
        this.casinoTickets = data;
      }
    });
  }

  goToCasino(id: number) {
    window.location.href = `/casino/${id}/dashboard`;
  }
}
