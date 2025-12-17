import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {BankDashboard} from "../models/bank-dashboard.model";
import {BankAccount} from "../models/bank-account.model";

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

  updateConfiguration(bankId: number, accountMaintenanceCost: number|null = null, transferCost: number|null = null,
                      maxAccountMoney: number|null = null, maxAccountResource: number|null = null) {
    let data: any = {};
    if(accountMaintenanceCost) {
      data["accountMaintenanceCost"] = accountMaintenanceCost;
    }
    if(transferCost) {
      data["transferCost"] = transferCost;
    }
    if(maxAccountMoney) {
      data["maxAccountMoney"] = maxAccountMoney;
    }
    if(maxAccountResource) {
      data["maxAccountResource"] = maxAccountResource;
    }
    return this.http.patch(`${this.baseUrl}/${bankId}/owner/config`, data);
  }

  getBankAccounts(bankId: number) {
    return this.http.get<BankAccount[]>(`${this.baseUrl}/${bankId}/owner/accounts`);
  }
}
