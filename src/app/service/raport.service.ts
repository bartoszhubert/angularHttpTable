import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Raports } from "../model/raport.model";
import { urlPack } from "./constans.service";

@Injectable({
  providedIn: "root"
})
export class RaportService {
  constructor(private http: HttpClient) {}

  getLocals() {
    return this.http.get<string[]>(urlPack.localsUrl);
  }

  getRaports() {
    return this.http.get<Raports[]>(urlPack.raportsUrl);
  }
}
