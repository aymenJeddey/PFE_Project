import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Agence } from '../../models/agence';

@Injectable({
  providedIn: 'root',
})
export class AgenceService {
  constructor(private http: HttpClient) {}

  getAllAgencies(): Observable<Agence[]> {
    return this.http.get<Agence[]>('http://localhost:8080/Agencies');
  }

  addAgency(agence: Agence): Observable<Agence> {
    return this.http.post<Agence>('http://localhost:8080/Agencies/', agence);
  }

  updateAgency(agence: Agence): Observable<Agence> {
    return this.http.put<Agence>('http://localhost:8080/Agencies/', agence);
  }

  deleteAgency(id: number): Observable<Agence> {
    return this.http.delete<Agence>('http://localhost:8080/Agencies/' + id);
  }
}
