import { CasinoLevel } from "./casino-level.model";

export interface CasinoDashboard {
  info: {
    id: number,
    name: string,
    level: number,
    moneyInSafe: number,
    ticketsSold: number,
    vipTicketsSold: number,
    maxTickets: number,
    maxVipTickets: number,
    companyId: number,
  },
  levels: CasinoLevel[],
  config: {
    ticketPrice: number,
    vipTicketPrice: number,
    rouletteSequenceMultiplicator: number,
    rouletteTripletMultiplcator: number,
    rouletteTripleSeventMultiplicator: number,
    rouletteMaxBet: number,
    rouletteVIPSequenceMultiplicator: number,
    rouletteVIPTripletMultiplcator: number,
    rouletteVIPTripleSeventMultiplicator: number,
    rouletteMaxVIPBet: number,
    diceGoal: number,
    diceWinMultiplicator: number,
    diceMaxBet: number,
    diceVIPGoal: number,
    diceVIPWinMultiplicator: number,
    diceVIPMaxBet: number,
  }
}
