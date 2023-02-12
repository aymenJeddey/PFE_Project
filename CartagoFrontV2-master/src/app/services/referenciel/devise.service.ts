import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Devise } from '../../models/devise';

@Injectable({
  providedIn: 'root',
})
export class DeviseService {
  constructor(private http: HttpClient) {}

  getAllCurrencies(): Observable<Devise[]> {
    return this.http.get<Devise[]>('http://localhost:8080/Currencies');
  }

  addCurrency(currency: Devise): Observable<Devise> {
    return this.http.post<Devise>(
      'http://localhost:8080/Currencies/',
      currency
    );
  }

  updateCurrency(currency: Devise): Observable<Devise> {
    return this.http.put<Devise>('http://localhost:8080/Currencies/', currency);
  }

  deleteCurrency(id: number): Observable<Devise> {
    return this.http.delete<Devise>('http://localhost:8080/Currencies/' + id);
  }
  getAllCurrenciesFromEngagement(): Observable<Devise[]> {
    return this.http.get<Devise[]>(
      "http://localhost:8081/Engagements/Currencies"
    );
  }
}
