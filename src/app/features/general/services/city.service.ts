import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import { City } from '../models/city.model';
import {Company} from "../models/company.model";
import {PaginateData} from "../../../core/models/paginate-data.model";

@Injectable({
  providedIn: 'root'
})
export class CityService {
  private baseUrl: string = environment.baseUri+"/city";

  constructor(private http: HttpClient) { }

  getCityOfUser() {
    return this.http.get<City>(`${this.baseUrl}/my`);
  }

  getCompaniesOfCityOfUser(companyName: string|null = null, companyLevel: number|null = null, companyType: string|null = null) {
    let params: HttpParams = new HttpParams();
    if (companyName && companyName != '') {
      params = params.set("name", companyName);
    }
    if(companyLevel && companyLevel != 0) {
      params = params.set("level", companyLevel);
    }
    if(companyType && companyType != '') {
      params = params.set("type", companyType);
    }
    return this.http.get<PaginateData<Company>>(`${this.baseUrl}/my/company`, {
      params: params
    });
  }
}
