import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {BankAccount} from "../models/bank-account.model";

@Injectable({
  providedIn: 'root'
})
export class BankService {
  private baseUrl: string = environment.baseUri + "/bank";

  constructor(private http: HttpClient) { }

  getUserBankAccounts() {
    return this.http.get<BankAccount[]>(`${this.baseUrl}/bank-accounts`);
  }
}
