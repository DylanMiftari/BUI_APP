import {Casino} from "./casino.model";

export interface CasinoTicket {
  id: number,
  isVIP: boolean,
  expireAt: string,
  casino: Casino,
  maxBetRoulette: number | null,
  maxBetDice: number | null,
  maxBetPoker: number | null,
  maxBetBlackjack: number | null,
  maxBetRoulette2: number | null,
}
