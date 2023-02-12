import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Annual } from '../../models/annual';

@Injectable({
  providedIn: 'root',
})
export class AnnualService {
  constructor(private http: HttpClient) {}

  getAllAnnuals(): Observable<Annual[]> {
    return this.http.get<Annual[]>('http://localhost:8080/Annuals');
  }

  addAnnual(annual: Annual): Observable<Annual> {
    return this.http.post<Annual>('http://localhost:8080/Annuals/', annual);
  }

  updateAnnual(annual: Annual): Observable<Annual> {
    return this.http.put<Annual>('http://localhost:8080/Annuals/', annual);
  }

  deleteAnnual(id: number): Observable<Annual> {
    return this.http.delete<Annual>('http://localhost:8080/Annuals/' + id);
  }
}
