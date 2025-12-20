import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {BankAccount} from "../models/bank-account.model";
import {Bank} from "../models/bank.model";
import {LoanRequest} from "../models/loan-request.model";
import {BankAccountTransaction} from "../models/bank-account-transaction.model";

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

  getBankAccountWithResources(bankId: number) {
    return this.http.get<BankAccount>(`${this.baseUrl}/${bankId}/account?with=resources`);
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

  getLoanRequest(bankId: number) {
    return this.http.get<LoanRequest[]>(`${this.baseUrl}/${bankId}/account/loan`);
  }

  createLoanRequest(bankId: number, money: number, weeklyPayment: number, description: string,
                    rate: number | null) {
    let data = {
      money: money,
      weeklyPayment: weeklyPayment,
      description: description,
    } as Record<string, any>
    if(rate != null) {
      data['rate'] = rate;
    }
    return this.http.post(`${this.baseUrl}/${bankId}/account/loan`, data);
  }

  cancelLoanRequest(bankId: number, loanRequestId: number) {
    return this.http.patch(`${this.baseUrl}/${bankId}/account/loan/${loanRequestId}/cancel`, {})
  }

  acceptLoanRequest(bankId: number, loanRequestId: number) {
    return this.http.patch(`${this.baseUrl}/${bankId}/account/loan/${loanRequestId}/accept`, {})
  }

  updateLoanRequest(bankId: number, loanRequestId: number, money: number, weeklyPayment: number, description: string,
                    rate: number | null) {
    let data = {
      money: money,
      weeklyPayment: weeklyPayment,
      description: description,
    } as Record<string, any>
    if(rate) {
      data['rate'] = rate;
    }
    return this.http.patch(`${this.baseUrl}/${bankId}/account/loan/${loanRequestId}/`, data)
  }

  getTransactions(bankId: number) {
    return this.http.get<BankAccountTransaction[]>(`${this.baseUrl}/${bankId}/account/transactions`);
  }

  withDrawResource(bankId: number, data: {resourceId: number, quantity: number}[]) {
    return this.http.patch(`${this.baseUrl}/${bankId}/account/resource/withdraw`, {
      resources: data
    });
  }

  depositResource(bankId: number, data: {resourceId: number, quantity: number}[]) {
    return this.http.patch(`${this.baseUrl}/${bankId}/account/resource/deposit`, {
      resources: data
    });
  }
}
