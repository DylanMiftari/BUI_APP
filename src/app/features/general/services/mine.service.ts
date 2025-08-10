import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Mine } from '../models/mine.model';

@Injectable({
  providedIn: 'root'
})
export class MineService {
  private baseUrl: string = environment.baseUri+"/mine";

  constructor(private http: HttpClient) { }

  getMines() {
    return this.http.get<Mine[]>(`${this.baseUrl}?with=hourlyIncome`);
  }
}
