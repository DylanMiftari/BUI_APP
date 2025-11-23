import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {authGuardChild} from "../../core/guards/auth.guard";
import {
  CasinoClientTicketDashboardComponent
} from "./pages/casino-client-ticket-dashboard/casino-client-ticket-dashboard.component";
import {CasinoBuyTicketPagesComponent} from "./pages/casino-buy-ticket-pages/casino-buy-ticket-pages.component";
import {CasinoClientDashboardComponent} from "./pages/casino-client-dashboard/casino-client-dashboard.component";
import {casinoTicketGuard} from "../../core/guards/casino-ticket.guard";

const routes: Routes = [
  { path: "casino", canActivateChild: [authGuardChild], children:
      [
        {path: "tickets", component: CasinoClientTicketDashboardComponent},
        {path: ":casinoId", component: CasinoBuyTicketPagesComponent},
        {path: ":casinoId", canActivateChild: [casinoTicketGuard],children:
            [
              {path: "dashboard", component: CasinoClientDashboardComponent},
            ]},
      ]}
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
