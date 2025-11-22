import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {authGuardChild} from "../../core/guards/auth.guard";
import {
  CasinoClientTicketDashboardComponent
} from "./pages/casino-client-ticket-dashboard/casino-client-ticket-dashboard.component";

const routes: Routes = [
  { path: "casino", canActivateChild: [authGuardChild], children:
      [
        {path: "tickets", component: CasinoClientTicketDashboardComponent}
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
