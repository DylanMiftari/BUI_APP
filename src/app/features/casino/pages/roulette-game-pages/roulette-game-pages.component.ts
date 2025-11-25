import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {CasinoTicket} from "../../models/casino-ticket.model";
import {RouletteData} from "../../models/roulette-data.model";
import {HeaderReturnButtonService} from "../../../../core/services/header-return-button.service";
import {CasinoClientService} from "../../services/casino-client-service";
import {ActivatedRoute} from "@angular/router";
import {forkJoin} from "rxjs";
import {
  RouletteGameTemplateComponent
} from "../../../../shared/templates/roulette-game-template/roulette-game-template.component";
import {DataUserService} from "../../../../core/services/data-user.service";

@Component({
  selector: 'app-roulette-game-pages',
  standalone: true,
  imports: [
    RouletteGameTemplateComponent
  ],
  templateUrl: './roulette-game-pages.component.html',
  styleUrl: './roulette-game-pages.component.css'
})
export class RouletteGamePagesComponent implements OnInit {
  public casinoTicket!: CasinoTicket;
  public rouletteData!: RouletteData;
  public rouletteState: string = "wait";
  public rouletteError: string = "";
  public goodNumbers: number[]|null[] = [null, null, null];
  public winnings: number = 0;
  public winMessage: string = "";

  private nonSevenTriples: number[][] = [
    [0, 0, 0], [1, 1, 1], [2, 2, 2], [3, 3, 3], [4, 4, 4],
    [5, 5, 5], [6, 6, 6], [8, 8, 8], [9, 9, 9]
  ];

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
        rouletteDataRequest: this.casinoService.getRouletteData(casinoId),
      }).subscribe({
        next: results => {
          this.casinoTicket = results.casinoTicketRequest;
          this.rouletteData = results.rouletteDataRequest;
          this.headerButtonSerivce.updateButton("🎰 Back to the casino", `/casino/${this.casinoTicket.casino.id}/dashboard`);
        }
      });
    });
  }

  playRoulette(bet: number) {
    if(this.rouletteState === "wait") {
      this.casinoService.playRoulette(this.casinoTicket.casino.id, bet).subscribe({
        next: results => {
          this.dataUserService.removePlayerMoney(bet);
          this.goodNumbers = results.roll.split("").map((value) => +value);
          this.rouletteState = "random";
          this.winnings = results.winnings;
        },
        error: err => {
          this.rouletteError = err.error.message;
        }
      });
    }
  }

  playerStopAllSpin() {
    if (this.winnings === 0) {
      this.winMessage = "Unfortunately, you didn't win anything. Maybe next time."
    } else if (this.areArraysEqual(this.goodNumbers, [7, 7, 7])) {
      this.winMessage = `Congratulations, you have rolled a triple 7 and won ${this.winnings.toLocaleString()}€`
    } else if(this.nonSevenTriples.some(triple => this.areArraysEqual(this.goodNumbers, triple))) {
      this.winMessage = `Nice, you have rolled a triple and won ${this.winnings.toLocaleString()}€`;
    } else {
      this.winMessage = `Cool, you have rolled a sequence and won ${this.winnings.toLocaleString()}€`;
    }
    this.rouletteState = "wait";
    this.dataUserService.addPlayerMoney(this.winnings);
    this.winnings = 0;
  }

  areArraysEqual(arr1: any[], arr2: any[]): boolean {
    if (arr1.length !== arr2.length) {
      return false;
    }
    return arr1.every((value, index) => {
      return value === arr2[index];
    });
  }
}
