import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { City } from '../models/city.model';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  private baseUrl: string = environment.baseUri+"/city";

  constructor(private http: HttpClient) { }

  getCityOfUser() {
    return this.http.get<City>(`${this.baseUrl}/my`);
  }
}
