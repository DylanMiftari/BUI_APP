import {Component, OnInit} from '@angular/core';
import {CasinoClientService} from "../../services/casino-client-service";
import {ActivatedRoute} from "@angular/router";
import {Casino} from "../../models/casino.model";
import {HeaderReturnButtonService} from "../../../../core/services/header-return-button.service";
import {
  CasinoBuyTicketTemplateComponent
} from "../../../../shared/templates/casino-buy-ticket-template/casino-buy-ticket-template.component";

@Component({
  selector: 'app-casino-buy-ticket-pages',
  standalone: true,
  imports: [
    CasinoBuyTicketTemplateComponent
  ],
  templateUrl: './casino-buy-ticket-pages.component.html',
  styleUrl: './casino-buy-ticket-pages.component.css'
})
export class CasinoBuyTicketPagesComponent implements OnInit {
  public casino: Casino | null = null;
  public buyError: string = "";

  constructor(
    private route: ActivatedRoute,
    private headerButton: HeaderReturnButtonService,
    private casinoClientService: CasinoClientService,
  ) {
    headerButton.updateButton("🏠 Back to Dashboard", "/");
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.casinoClientService.getCasinoData(params["casinoId"]).subscribe(casino => {
        this.casino = casino;
      })
    })
  }

  buyTicket(isVIP: boolean) {
    this.casinoClientService.buyTicket(this.casino!.id, isVIP).subscribe({
      next: () => {
        window.location.href = "/casino/"+this.casino!.id+"/dashboard";
      },
      error: (err) => {
        this.buyError = err.error.message;
      }
    });
  }
}
