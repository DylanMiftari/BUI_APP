import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {authGuardChild} from "../../core/guards/auth.guard";
import {
  CasinoClientTicketDashboardComponent
} from "../casino/pages/casino-client-ticket-dashboard/casino-client-ticket-dashboard.component";
import {CasinoBuyTicketPagesComponent} from "../casino/pages/casino-buy-ticket-pages/casino-buy-ticket-pages.component";
import {casinoTicketGuard} from "../../core/guards/casino-ticket.guard";
import {
  CasinoClientDashboardComponent
} from "../casino/pages/casino-client-dashboard/casino-client-dashboard.component";
import {RouletteGamePagesComponent} from "../casino/pages/roulette-game-pages/roulette-game-pages.component";
import {DiceGamePagesComponent} from "../casino/pages/dice-game-pages/dice-game-pages.component";
import {PokerGamePagesComponent} from "../casino/pages/poker-game-pages/poker-game-pages.component";
import {BlackjackGamePagesComponent} from "../casino/pages/blackjack-game-pages/blackjack-game-pages.component";
import {Roulette2GamePagesComponent} from "../casino/pages/roulette2-game-pages/roulette2-game-pages.component";
import {CasinoDashboardPagesComponent} from "../casino/pages/casino-dashboard-pages/casino-dashboard-pages.component";
import {ConfigCasinoPagesComponent} from "../casino/pages/config-casino-pages/config-casino-pages.component";
import {MyAccountsPagesComponent} from "./pages/my-accounts-pages/my-accounts-pages.component";
import {OpenAccountPagesComponent} from "./pages/open-account-pages/open-account-pages.component";
import {
  ClientAccountDetailsPagesComponent
} from "./pages/client-account-details-pages/client-account-details-pages.component";
import {ClientLoanRequestPagesComponent} from "./pages/client-loan-request-pages/client-loan-request-pages.component";
import {
  ClientSeeTransactionsPagesComponent
} from "./pages/client-see-transactions-pages/client-see-transactions-pages.component";
import {BankDashboardPagesComponent} from "./pages/bank-dashboard-pages/bank-dashboard-pages.component";
import {
  BankConfigDashboardPagesComponent
} from "./pages/bank-config-dashboard-pages/bank-config-dashboard-pages.component";
import {AccountListOwnerPagesComponent} from "./pages/account-list-owner-pages/account-list-owner-pages.component";
import {
  BankAccountDetailsConfigPagesComponent
} from "./pages/bank-account-details-config-pages/bank-account-details-config-pages.component";
import {BankLoansListPagesComponent} from "./pages/bank-loans-list-pages/bank-loans-list-pages.component";

const routes: Routes = [
  {
    path: "bank", canActivateChild: [authGuardChild], children:
      [
        {path: "my-accounts", component: MyAccountsPagesComponent},
        {
          path: ":bank", children: [
            {path: "", component: OpenAccountPagesComponent},
            {path: "account", component: ClientAccountDetailsPagesComponent},
            {path: "loan", component: ClientLoanRequestPagesComponent},
            {path: "transactions", component: ClientSeeTransactionsPagesComponent},
            {path: "owner-dashboard", component: BankDashboardPagesComponent},
            {path: "config", component: BankConfigDashboardPagesComponent},
            {path: "accounts", component: AccountListOwnerPagesComponent},
            {path: "loans", component: BankLoansListPagesComponent},
            {path: "accounts/:bankAccount", component: BankAccountDetailsConfigPagesComponent}
          ]
        }
      ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BankModule { }
