import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tier } from '../../models/tier';

@Injectable({
  providedIn: 'root',
})
export class BanqueService {
  constructor(private http: HttpClient) {}

  getAllBanques(): Observable<Tier[]> {
    return this.http.get<Tier[]>('http://localhost:8080/Tiers/Banks');
  }

  addBanque(banque: Tier): Observable<Tier> {
    return this.http.post<Tier>('http://localhost:8080/Tiers/', banque);
  }

  updateBanque(banque: Tier): Observable<Tier> {
    return this.http.put<Tier>('http://localhost:8080/Tiers/', banque);
  }

  deleteBanque(id: number): Observable<Tier> {
    return this.http.delete<Tier>('http://localhost:8080/Tiers/' + id);
  }
}
