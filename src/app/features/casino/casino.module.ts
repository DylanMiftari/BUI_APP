import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { authGuardChild } from "../../core/guards/auth.guard";
import {
  CasinoClientTicketDashboardComponent
} from "./pages/casino-client-ticket-dashboard/casino-client-ticket-dashboard.component";
import { CasinoBuyTicketPagesComponent } from "./pages/casino-buy-ticket-pages/casino-buy-ticket-pages.component";
import { CasinoClientDashboardComponent } from "./pages/casino-client-dashboard/casino-client-dashboard.component";
import { casinoTicketGuard } from "../../core/guards/casino-ticket.guard";
import { RouletteGamePagesComponent } from "./pages/roulette-game-pages/roulette-game-pages.component";
import { DiceGamePagesComponent } from "./pages/dice-game-pages/dice-game-pages.component";
import { PokerGamePagesComponent } from "./pages/poker-game-pages/poker-game-pages.component";

const routes: Routes = [
  {
    path: "casino", canActivateChild: [authGuardChild], children:
      [
        { path: "tickets", component: CasinoClientTicketDashboardComponent },
        { path: ":casinoId", component: CasinoBuyTicketPagesComponent },
        {
          path: ":casinoId", canActivateChild: [casinoTicketGuard], children:
            [
              { path: "dashboard", component: CasinoClientDashboardComponent },
              { path: "roulette", component: RouletteGamePagesComponent },
              { path: "dice", component: DiceGamePagesComponent },
              { path: "poker", component: PokerGamePagesComponent },
            ]
        },
      ]
  }
];

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CasinoModule { }
