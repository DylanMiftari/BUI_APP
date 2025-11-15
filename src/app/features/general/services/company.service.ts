import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Company} from "../models/company.model";
import {Mine} from "../models/mine.model";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private baseUri: string = environment.baseUri + "/company";

  constructor(private http: HttpClient) { }

  getCompaniesOfUser() {
    return this.http.get<Company[]>(`${this.baseUri}/my`);
  }

  upgradeCompany(companyId: number) {
    return this.http.patch(`${this.baseUri}/${companyId}/upgrade`, {});
  }

  createCompany(companyName: string, companyType: string) {
    return this.http.post(`${this.baseUri}`, {
      "name": companyName,
      "type": companyType,
    });
  }

  getStatus(company: Company) {
    return company.activated ? "Active" : "Inactive";
  }

  getStatusColor(company: Company) {
    return company.activated ? "#22c55e" : "#cf1e1e"
  }
}
