import {Component, OnInit} from '@angular/core';
import {HeaderReturnButtonService} from "../../../../core/services/header-return-button.service";
import {CasinoClientService} from "../../services/casino-client-service";
import {CasinoTicket} from "../../models/casino-ticket.model";
import {ActivatedRoute} from "@angular/router";
import {
  CasinoClientDashboardTemplateComponent
} from "../../../../shared/templates/casino-client-dashboard-template/casino-client-dashboard-template.component";

@Component({
  selector: 'app-casino-client-dashboard',
  standalone: true,
  imports: [
    CasinoClientDashboardTemplateComponent
  ],
  templateUrl: './casino-client-dashboard.component.html',
  styleUrl: './casino-client-dashboard.component.css'
})
export class CasinoClientDashboardComponent implements OnInit {
  public casinoTicket: CasinoTicket | null = null;

  constructor(
    private headerButton: HeaderReturnButtonService,
    private casinoService: CasinoClientService,
    private route: ActivatedRoute,
  ) {
    headerButton.updateButton("🏠 Back to Dashboard", "/");
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let casinoId: number = params["casinoId"];
      this.casinoService.getUserTicket(casinoId).subscribe({
        next: data => {
          this.casinoTicket = data;
        }
      });
    })
  }

  goToGame(game: string) {
    window.location.href = `/casino/${this.casinoTicket?.casino.id}/${game}`;
  }
}
