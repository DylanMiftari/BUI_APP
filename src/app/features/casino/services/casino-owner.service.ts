import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {CasinoDashboard} from "../models/casino-dashboard.model";

@Injectable({
  providedIn: 'root'
})
export class CasinoOwnerService {

  baseUrl: string = environment.baseUri + "/casino";
  constructor(private http: HttpClient) { }

  getDashboardData(casinoId: number, withParam: string = "") {
    return this.http.get<CasinoDashboard>(`${this.baseUrl}/${casinoId}/dashboard?with=${withParam}`);
  }

  updateCasinoConfiguration(casinoId: number, payload: any) {
    return this.http.patch(`${this.baseUrl}/${casinoId}/config/ticket-price`, payload);
  }
}
