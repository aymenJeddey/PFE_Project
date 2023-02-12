import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Weekly } from '../../models/weekly';

@Injectable({
  providedIn: 'root',
})
export class WeeklyService {
  constructor(private http: HttpClient) {}

  getAllWeeklys(): Observable<Weekly[]> {
    return this.http.get<Weekly[]>('http://localhost:8080/Weeklys');
  }

  addWeekly(weekly: Weekly): Observable<Weekly> {
    return this.http.post<Weekly>('http://localhost:8080/Weeklys/', weekly);
  }

  updateWeekly(weekly: Weekly): Observable<Weekly> {
    return this.http.put<Weekly>('http://localhost:8080/Weeklys/', weekly);
  }

  deleteWeekly(id: number): Observable<Weekly> {
    return this.http.delete<Weekly>('http://localhost:8080/Weeklys/' + id);
  }
}
