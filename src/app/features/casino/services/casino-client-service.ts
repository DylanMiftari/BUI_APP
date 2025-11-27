import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment";
import { CasinoTicket } from "../models/casino-ticket.model";
import { Casino } from "../models/casino.model";
import { RouletteData } from "../models/roulette-data.model";
import { RouletteResult } from "../models/roulette-result.model";
import { DiceData } from "../models/dice-data.model";
import { DiceResult } from "../models/dice-result.model";
import { PokerData } from "../models/poker-data.model";
import { PokerResult } from "../models/poker-result.model";

@Injectable({
  providedIn: 'root'
})
export class CasinoClientService {
  baseUrl: string = environment.baseUri + "/casino";
  constructor(private http: HttpClient) { }

  getUserTickets() {
    return this.http.get<CasinoTicket[]>(`${this.baseUrl}/tickets`);
  }

  getCasinoData(id: number) {
    return this.http.get<Casino>(`${this.baseUrl}/${id}`);
  }

  buyTicket(casinoId: number, isVIP: boolean) {
    return this.http.post(`${this.baseUrl}/${casinoId}/buy`, {
      "isVIP": isVIP,
    });
  }

  hasTicket(casinoId: number) {
    return this.http.get(`${this.baseUrl}/${casinoId}/have-ticket`);
  }

  getUserTicket(casinoId: number) {
    return this.http.get<CasinoTicket>(`${this.baseUrl}/${casinoId}/ticket`);
  }

  getRouletteData(casinoId: number) {
    return this.http.get<RouletteData>(`${this.baseUrl}/${casinoId}/game-data/roulette`);
  }

  playRoulette(casinoId: number, bet: number) {
    return this.http.post<RouletteResult>(`${this.baseUrl}/${casinoId}/game/roulette`, {
      bet: bet
    });
  }

  getDiceData(casinoId: number) {
    return this.http.get<DiceData>(`${this.baseUrl}/${casinoId}/game-data/dice`);
  }

  playDice(casinoId: number, bet: number) {
    return this.http.post<DiceResult>(`${this.baseUrl}/${casinoId}/game/dice`, {
      bet: bet
    });
  }

  getPokerData(casinoId: number) {
    return this.http.get<PokerData>(`${this.baseUrl}/${casinoId}/game-data/poker`);
  }

  playPoker(casinoId: number, bet: number) {
    return this.http.post<PokerResult>(`${this.baseUrl}/${casinoId}/game/poker`, {
      bet: bet
    });
  }
}
