import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {CasinoTicket} from "../models/casino-ticket.model";

@Injectable({
  providedIn: 'root'
})
export class CasinoClientService {
  baseUrl: string = environment.baseUri+"/casino";
  constructor(private http: HttpClient) { }

  getUserTickets() {
    return this.http.get<CasinoTicket[]>(`${this.baseUrl}/tickets`);
  }
}
