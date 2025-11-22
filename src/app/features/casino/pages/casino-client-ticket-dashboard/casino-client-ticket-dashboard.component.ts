import { Component } from '@angular/core';
import {HeaderReturnButtonService} from "../../../../core/services/header-return-button.service";

@Component({
  selector: 'app-casino-client-ticket-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './casino-client-ticket-dashboard.component.html',
  styleUrl: './casino-client-ticket-dashboard.component.css'
})
export class CasinoClientTicketDashboardComponent {
  constructor(private returnButtonService: HeaderReturnButtonService) {
    returnButtonService.updateButton("🏠 Back to Dashboard", "/");
  }
}
