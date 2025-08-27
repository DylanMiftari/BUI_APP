import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Resource } from '../models/resource.model';
import {UserResource} from "../models/user-resource.model";

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  private apiUrl: string = environment.baseUri+"/resource";

  constructor(private http: HttpClient) { }

  public getResourcesForMineLevel(mineLevel: number) {
    return this.http.get<Resource[]>(`${this.apiUrl}?mineable_at=${mineLevel}`);
  }

  public getUserResources() {
    return this.http.get<UserResource[]>(`${this.apiUrl}/my`);
  }
}
