import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Company} from "../models/company.model";

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
}
