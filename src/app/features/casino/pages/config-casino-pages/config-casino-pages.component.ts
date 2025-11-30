import { Component, OnInit } from '@angular/core';
import {
  ConfigCasinoTemplateComponent
} from "../../../../shared/templates/config-casino-template/config-casino-template.component";
import { CasinoDashboard } from "../../models/casino-dashboard.model";
import { HeaderReturnButtonService } from "../../../../core/services/header-return-button.service";
import { CasinoOwnerService } from "../../services/casino-owner.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-config-casino-pages',
  standalone: true,
  imports: [
    ConfigCasinoTemplateComponent
  ],
  templateUrl: './config-casino-pages.component.html',
  styleUrl: './config-casino-pages.component.css'
})
export class ConfigCasinoPagesComponent implements OnInit {
  public casinoDashboardData: CasinoDashboard | undefined = undefined;

  public casinoConfigUpdate: string = "";
  public casinoConfigError: string = "";
  public rouletteConfigUpdate: string = "";
  public rouletteConfigError: string = "";
  public diceConfigUpdate: string = "";
  public diceConfigError: string = "";
  public pokerConfigUpdate: string = "";
  public pokerConfigError: string = "";
  public blackjackConfigUpdate: string = "";
  public blackjackConfigError: string = "";

  constructor(
    private headerButton: HeaderReturnButtonService,
    private casinoService: CasinoOwnerService,
    private route: ActivatedRoute,
  ) {
    headerButton.updateButton("🏢 Back to Businesses", "/company")
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let casinoId = params['casinoId'];
      this.casinoService.getDashboardData(casinoId, "config").subscribe({
        next: data => {
          this.casinoDashboardData = data;
        }
      })
    })
  }

  saveConfiguration(data: any) {
    this.casinoService.updateCasinoConfiguration(this.casinoDashboardData!.info.id, data).subscribe({
      next: () => {
        this.casinoConfigUpdate = "Casino Configuration Updated";
        this.casinoConfigError = "";
      },
      error: err => {
        this.casinoConfigUpdate = "";
        this.casinoConfigError = err.error.message;
      }
    })
  }
  saveRoulette(data: any) {
    this.casinoService.updateRouletteConfiguration(this.casinoDashboardData!.info.id, data).subscribe({
      next: () => {
        this.rouletteConfigUpdate = "Roulette Configuration Updated";
        this.rouletteConfigError = "";
      },
      error: err => {
        this.rouletteConfigUpdate = "";
        this.rouletteConfigError = err.error.message;
      }
    })
  }
  saveDice(data: any) {
    this.casinoService.updateDiceConfiguration(this.casinoDashboardData!.info.id, data).subscribe({
      next: () => {
        this.diceConfigUpdate = "Dice Configuration Updated";
        this.diceConfigError = "";
      },
      error: err => {
        this.diceConfigUpdate = "";
        this.diceConfigError = err.error.message;
      }
    })
  }
  savePoker(data: any) {
    this.casinoService.updatePokerConfiguration(this.casinoDashboardData!.info.id, data).subscribe({
      next: () => {
        this.pokerConfigUpdate = "Poker Configuration Updated";
        this.pokerConfigError = "";
      },
      error: err => {
        this.pokerConfigUpdate = "";
        this.pokerConfigError = err.error.message;
      }
    })
  }
  saveBlackjack(data: any) {
    this.casinoService.updateBlackjackConfiguration(this.casinoDashboardData!.info.id, data).subscribe({
      next: () => {
        this.blackjackConfigUpdate = "Blackjack Configuration Updated";
        this.blackjackConfigError = "";
      },
      error: err => {
        this.blackjackConfigUpdate = "";
        this.blackjackConfigError = err.error.message;
      }
    })
  }
}
