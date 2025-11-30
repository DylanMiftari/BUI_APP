export interface CasinoLevel {
  level: number;
  nbMaxTicket: number;
  nbMaxVIPTicket: number;
  maxTicketPrice: number;
  maxVIPTicketPrice: number | null;
  rouletteMaxBet: number;
  rouletteMaxVIPBet: number;
  diceMaxBet: number;
  diceMaxVIPBet: number;
  pokerMaxBet: number;
  pokerMaxVIPBet: number;
  blackJackMaxBet: number;
  blackJackMaxVIPBet: number;
  roulette2MaxBet: number;
  roulette2MaxVIPBet: number;
}
