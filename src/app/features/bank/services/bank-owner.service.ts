import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {BankDashboard} from "../models/bank-dashboard.model";

@Injectable({
  providedIn: 'root'
})
export class BankOwnerService {
  baseUrl: string = environment.baseUri+"/bank";

  constructor(
    private http: HttpClient,
  ) { }

  getDashboardData(bankId: number) {
    return this.http.get<BankDashboard>(`${this.baseUrl}/${bankId}/owner/dashboard`);
  }
}
