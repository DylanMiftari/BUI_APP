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

  getStatus(mine: Mine) {
    return mine.resource ? "Active" : "Inactive";
  }

  getStatusColor(mine: Mine) {
    return mine.resource ? "#22c55e" : "#6b7280"
  }

  getMinuteLeft(mine: Mine): number {
    if(!mine.startedAt) {
      return 0;
    }
    let now = new Date();
    let startedAt = new Date(mine.startedAt);
    let spentMs = now.getTime() - startedAt.getTime();
    let spendMinutes = Math.round(spentMs / (1000 * 60));
    return mine.resource!.timeToMine - spendMinutes;
  }
}
