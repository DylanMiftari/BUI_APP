import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Mafia} from "../models/mafia.model";

@Injectable({
  providedIn: 'root'
})
export class MafiaService {
  private baseUrl: string = environment.baseUri + "/mafia";

  constructor(private http: HttpClient) { }

  getMafia(id: number) {
    return this.http.get<Mafia>(`${this.baseUrl}/${id}`);
  }
}
