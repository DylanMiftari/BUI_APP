import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {BankAccount} from "../models/bank-account.model";
import {Bank} from "../models/bank.model";

@Injectable({
  providedIn: 'root'
})
export class BankService {
  private baseUrl: string = environment.baseUri + "/bank";

  constructor(private http: HttpClient) { }

  getBankInformation(bankId: number) {
    return this.http.get<Bank>(`${this.baseUrl}/${bankId}`);
  }

  getUserBankAccounts() {
    return this.http.get<BankAccount[]>(`${this.baseUrl}/bank-accounts`);
  }

  getBankAccount(bankId: number) {
    return this.http.get<BankAccount>(`${this.baseUrl}/${bankId}/account`);
  }

  createBankAccount(bankId: number) {
    return this.http.post(`${this.baseUrl}/${bankId}/create-account`, {});
  }

  debitAccount(bankId: number, amount: number) {
    return this.http.patch(`${this.baseUrl}/${bankId}/account/debit`, {
      amount: amount,
    });
  }

  creditAccount(bankId: number, amount: number) {
    return this.http.patch(`${this.baseUrl}/${bankId}/account/credit`, {
      amount: amount,
    });
  }

  transferMoney(bankId: number, amount: number, destAccountId: number) {
    return this.http.patch(`${this.baseUrl}/${bankId}/account/transfer`, {
      amount: amount,
      destinationAccount: destAccountId,
    })
  }
}
