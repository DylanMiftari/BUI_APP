import {Casino} from "./casino.model";

export interface CasinoTicket {
  id: number,
  isVIP: boolean,
  expireAt: string,
  casino: Casino
}
