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

  getDashboardData(casinoId: number) {
    return this.http.get<CasinoDashboard>(`${this.baseUrl}/${casinoId}/dashboard`);
  }
}
