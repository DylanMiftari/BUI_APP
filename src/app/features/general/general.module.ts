import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginPagesComponent } from './pages/login-pages/login-pages.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { authGuardChild } from '../../core/guards/auth.guard';
import { MineDashboardPageComponent } from './pages/mine-dashboard-page/mine-dashboard-page.component';
import { MineDetailsPageComponent } from './pages/mine-details-page/mine-details-page.component';
import { CityDashboardPageComponent } from './pages/city-dashboard-page/city-dashboard-page.component';
import {MarketPageComponent} from "./pages/market-page/market-page.component";
import {CompanyDashboardPageComponent} from "./pages/company-dashboard-page/company-dashboard-page.component";

const routes: Routes = [
  { path: "register", component: RegisterPageComponent},
  { path: "login", component: LoginPagesComponent},
  { path: "", canActivateChild: [authGuardChild], children: [
    { path: "mine", component: MineDashboardPageComponent },
    { path: "mine/:id", component: MineDetailsPageComponent },
    { path: "city", component: CityDashboardPageComponent },
    { path: "market", component: MarketPageComponent },
    { path: "company", component: CompanyDashboardPageComponent },

    { path: "", component: DashboardPageComponent },
  ]}
]

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class GeneralModule { }
