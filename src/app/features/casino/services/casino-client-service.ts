import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {CasinoTicket} from "../models/casino-ticket.model";
import {Casino} from "../models/casino.model";

@Injectable({
  providedIn: 'root'
})
export class CasinoClientService {
  baseUrl: string = environment.baseUri+"/casino";
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
}
