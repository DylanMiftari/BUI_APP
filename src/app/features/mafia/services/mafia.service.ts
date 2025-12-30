import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Mafia} from "../models/mafia.model";
import {TargetResult} from "../models/targets-result.model";
import {MafiaContract} from "../models/mafia-contract.model";

@Injectable({
  providedIn: 'root'
})
export class MafiaService {
  private baseUrl: string = environment.baseUri + "/mafia";

  constructor(private http: HttpClient) { }

  getMafia(id: number) {
    return this.http.get<Mafia>(`${this.baseUrl}/${id}`);
  }

  getTargets(mafiaId: number) {
    return this.http.get<TargetResult>(`${this.baseUrl}/${mafiaId}/targets`);
  }

  getContract(mafiaId: number) {
    return this.http.get<MafiaContract>(`${this.baseUrl}/${mafiaId}/contract`);
  }
}
