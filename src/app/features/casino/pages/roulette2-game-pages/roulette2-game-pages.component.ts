import {Component, OnInit} from '@angular/core';
import {
  Roulette2GameTemplateComponent
} from "../../../../shared/templates/roulette2-game-template/roulette2-game-template.component";
import {CasinoTicket} from "../../models/casino-ticket.model";
import {RouletteData} from "../../models/roulette-data.model";
import {Roulette2Data} from "../../models/roulette2-data.model";
import {HeaderReturnButtonService} from "../../../../core/services/header-return-button.service";
import {CasinoClientService} from "../../services/casino-client-service";
import {ActivatedRoute} from "@angular/router";
import {DataUserService} from "../../../../core/services/data-user.service";
import {forkJoin} from "rxjs";

@Component({
  selector: 'app-roulette2-game-pages',
  standalone: true,
  imports: [
    Roulette2GameTemplateComponent
  ],
  templateUrl: './roulette2-game-pages.component.html',
  styleUrl: './roulette2-game-pages.component.css'
})
export class Roulette2GamePagesComponent implements OnInit {
  public casinoTicket!: CasinoTicket;
  public roulette2Data!: Roulette2Data;

  constructor(
    private headerButtonSerivce: HeaderReturnButtonService,
    private casinoService: CasinoClientService,
    private route: ActivatedRoute,
    private dataUserService: DataUserService
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let casinoId = params['casinoId'];
      forkJoin({
        casinoTicketRequest: this.casinoService.getUserTicket(casinoId),
        roulette2DataRequest: this.casinoService.getRoulette2Data(casinoId),
      }).subscribe({
        next: results => {
          this.casinoTicket = results.casinoTicketRequest;
          this.roulette2Data = results.roulette2DataRequest;
          this.headerButtonSerivce.updateButton("🎰 Back to the casino", `/casino/${this.casinoTicket.casino.id}/dashboard`);
        }
      });
    });
  }
}
