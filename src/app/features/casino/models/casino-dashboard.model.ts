import {CasinoLevel} from "./casino-level.model";

export interface CasinoDashboard {
  info: {
    name: string,
    level: number,
    moneyInSafe: number,
    ticketsSold: number,
    vipTicketsSold: number,
    maxTickets: number,
    maxVipTickets: number,
    companyId: number,
  },
  levels: CasinoLevel[]
}
