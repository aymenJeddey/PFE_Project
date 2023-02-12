import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tier } from '../../models/tier';

@Injectable({
  providedIn: 'root',
})
export class TierService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Tier[]> {
    return this.http.get<Tier[]>('http://localhost:8080/Tiers');
  }
  getBanksFromEngagement(): Observable<Tier[]> {
    return this.http.get<Tier[]>("http://localhost:8081/Engagements/Banks");
  }

  getPersonsFromEngagement(): Observable<Tier[]> {
    return this.http.get<Tier[]>("http://localhost:8081/Engagements/Persons");
  }

  getTierByIdFromEngagement(id): Observable<Tier[]> {
    return this.http.get<Tier[]>(
      "http://localhost:8081/Engagements/Tiers/" + id
    );
  }
}
