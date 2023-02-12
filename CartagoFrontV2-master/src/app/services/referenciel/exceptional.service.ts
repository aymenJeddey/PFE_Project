import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Exceptional } from '../../models/exceptional';

@Injectable({
  providedIn: 'root',
})
export class ExceptionalService {
  constructor(private http: HttpClient) {}

  getAllExceptionals(): Observable<Exceptional[]> {
    return this.http.get<Exceptional[]>('http://localhost:8080/Exceptionals');
  }

  addExceptional(exceptional: Exceptional): Observable<Exceptional> {
    return this.http.post<Exceptional>(
      'http://localhost:8080/Exceptionals/',
      exceptional
    );
  }

  updateExceptional(exceptional: Exceptional): Observable<Exceptional> {
    return this.http.put<Exceptional>(
      'http://localhost:8080/Exceptionals/',
      exceptional
    );
  }

  deleteExceptional(id: number): Observable<Exceptional> {
    return this.http.delete<Exceptional>(
      'http://localhost:8080/Exceptionals/' + id
    );
  }
}
