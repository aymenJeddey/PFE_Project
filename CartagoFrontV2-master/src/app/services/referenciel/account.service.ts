import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Account } from "../../models/account";
import { ContractState } from "../../models/enum/contract-state";

@Injectable({
  providedIn: "root",
})
export class AccountService {
  constructor(private http: HttpClient) {}

  getAllAccounts(): Observable<any> {
    return this.http.get<Account[]>("http://localhost:8080/Accounts");
  }

  addAccount(account: Account): Observable<Account> {
    return this.http.post<Account>("http://localhost:8080/Accounts/", account);
  }

  updateAccount(account: Account): Observable<Account> {
    return this.http.put<Account>("http://localhost:8080/Accounts/", account);
  }

  updateAccountbyStatus(id: string, status: ContractState) {
    return this.http.patch(
      "http://localhost:8080/Accounts/" + id + "/" + status,
      status
    );
  }

  deleteAccount(id: number): Observable<Account> {
    return this.http.delete<Account>("http://localhost:8080/Accounts/" + id);
  }
  getAccountByIdFromEngagement(id: number): Observable<Account[]> {
    return this.http.get<Account[]>(
      "http://localhost:8081/Engagements/Accounts/" + id
    );
  }
  getAccountByTierIdFromEngagement(id: number): Observable<Account[]> {
    return this.http.get<Account[]>(
      "http://localhost:8081/Engagements/Accounts/" + id + "/Tier"
    );
  }
  getAccountsByStatut(statut: string) {
    return this.http.get<any>(
      "http://localhost:8080/Accounts/statut" + "?statut=" + statut
    );
  }
}
