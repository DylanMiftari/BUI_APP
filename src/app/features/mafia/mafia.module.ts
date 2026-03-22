import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {RegisterPageComponent} from "../general/pages/register-page/register-page.component";
import {LoginPagesComponent} from "../general/pages/login-pages/login-pages.component";
import {authGuard, authGuardChild} from "../../core/guards/auth.guard";
import {MineDashboardPageComponent} from "../general/pages/mine-dashboard-page/mine-dashboard-page.component";
import {MineDetailsPageComponent} from "../general/pages/mine-details-page/mine-details-page.component";
import {CityDashboardPageComponent} from "../general/pages/city-dashboard-page/city-dashboard-page.component";
import {TravelDashboardPagesComponent} from "../general/pages/travel-dashboard-pages/travel-dashboard-pages.component";
import {InTravelPagesComponent} from "../general/pages/in-travel-pages/in-travel-pages.component";
import {MarketPageComponent} from "../general/pages/market-page/market-page.component";
import {CompanyDashboardPageComponent} from "../general/pages/company-dashboard-page/company-dashboard-page.component";
import {CreateCompanyPageComponent} from "../general/pages/create-company-page/create-company-page.component";
import {HomesListPagesComponent} from "../general/pages/homes-list-pages/homes-list-pages.component";
import {DashboardPageComponent} from "../general/pages/dashboard-page/dashboard-page.component";
import {
  MafiaClientDashboardPagesComponent
} from "./pages/mafia-client-dashboard-pages/mafia-client-dashboard-pages.component";
import {MafiaTargetSelectionComponent} from "./pages/mafia-target-selection/mafia-target-selection.component";
import {
  ClientMafiaContractPagesComponent
} from "./pages/client-mafia-contract-pages/client-mafia-contract-pages.component";
import {PlayerContractsListComponent} from "./pages/player-contracts-list/player-contracts-list.component";
import {
  MafiaOwnerDashboardPagesComponent
} from "./pages/mafia-owner-dashboard-pages/mafia-owner-dashboard-pages.component";

const routes: Routes = [
  {path: "mafia", canActivateChild: [authGuardChild], children: [
      {path: "my-contracts", component: PlayerContractsListComponent},
      {path: ":mafia", component: MafiaClientDashboardPagesComponent},
      {path: ":mafia/targets", component: MafiaTargetSelectionComponent},
      {path: ":mafia/contracts", component: ClientMafiaContractPagesComponent},
      {path: ":mafia/owner-dashboard", component: MafiaOwnerDashboardPagesComponent},
    ]}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class MafiaModule { }
