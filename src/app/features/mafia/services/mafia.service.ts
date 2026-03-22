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

  getContractsOfPlayer() {
    return this.http.get<MafiaContract[]>(`${this.baseUrl}/contracts`);
  }

  getMafia(id: number) {
    return this.http.get<Mafia>(`${this.baseUrl}/${id}`);
  }

  getTargets(mafiaId: number) {
    return this.http.get<TargetResult>(`${this.baseUrl}/${mafiaId}/targets`);
  }

  getContract(mafiaId: number) {
    return this.http.get<MafiaContract>(`${this.baseUrl}/${mafiaId}/contract`);
  }

  createContract(mafiaId: number, targetType: string, targetId: number) {
    return this.http.post(`${this.baseUrl}/${mafiaId}/contract`, {
      targetType: targetType,
      targetId: targetId
    });
  }

  getMafiaForOwner(id: number) {
    return this.http.get<Mafia>(`${this.baseUrl}/${id}/owner`);
  }
  getMafiaForOwnerWithLevels(id: number) {
    return this.http.get<Mafia>(`${this.baseUrl}/${id}/owner?with=levels`);
  }
}
