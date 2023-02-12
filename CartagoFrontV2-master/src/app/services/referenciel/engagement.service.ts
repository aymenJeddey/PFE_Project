import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ContractState } from "../../models/enum/contract-state";

@Injectable({
  providedIn: "root",
})
export class EngagementService {
  constructor(private http: HttpClient) {}

  preview(engagment: any): Observable<any> {
    return this.http.post<any>("http://localhost:8081/Engagements/", engagment);
  }
  add(engagment: any): Observable<any> {
    return this.http.post<any>(
      "http://localhost:8081/Engagements/save",
      engagment
    );
  }

  updateContractbyStatus(id: string, status: ContractState) {
    return this.http.patch(
      "http://localhost:8081/Engagements/" + id + "/" + status,
      status
    );
  }

  engagementList(): Observable<any> {
    return this.http.get<any>("http://localhost:8081/Engagements/");
  }
}
