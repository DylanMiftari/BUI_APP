import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Home} from "../models/home.model";

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  baseUrl: string = environment.baseUri+"/home";

  constructor(
    private http: HttpClient
  ) { }

  getHomes() {
    return this.http.get<Home[]>(`${this.baseUrl}`);
  }
}
