import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tier } from '../../models/tier';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor(private http: HttpClient) {}

  getAllClients(): Observable<Tier[]> {
    return this.http.get<Tier[]>('http://localhost:8080/Tiers/Persons');
  }

  addClient(client: Tier): Observable<Tier> {
    return this.http.post<Tier>('http://localhost:8080/Tiers/', client);
  }

  updateClient(client: Tier): Observable<Tier> {
    return this.http.put<Tier>('http://localhost:8080/Tiers/', client);
  }

  deleteClient(id: number): Observable<Tier> {
    return this.http.delete<Tier>('http://localhost:8080/Tiers/' + id);
  }
}
