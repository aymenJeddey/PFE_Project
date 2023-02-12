import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Annual } from '../../models/annual';
import { Calendrie } from '../../models/calendrie';
import { Exceptional } from '../../models/exceptional';
import { Weekly } from '../../models/weekly';


@Injectable({
  providedIn: 'root',
})
export class CalendrieService {
  constructor(private http: HttpClient) {}

  getAllCalendars(): Observable<Calendrie[]> {
    return this.http.get<Calendrie[]>('http://localhost:8080/Calendars');
  }

  getWeeklysByCalendarId(id: number): Observable<Weekly[]> {
    return this.http.get<Weekly[]>(
      'http://localhost:8080/Calendars/' + id + '/Weeklys'
    );
  }

  getExceptionalsByCalendarId(id: number): Observable<Exceptional[]> {
    return this.http.get<Exceptional[]>(
      'http://localhost:8080/Calendars/' + id + '/Exceptionals'
    );
  }

  getAnnualsByCalendarId(id: number): Observable<Annual[]> {
    return this.http.get<Annual[]>(
      'http://localhost:8080/Calendars/' + id + '/Annuals'
    );
  }

  addCalendar(calendar: Calendrie): Observable<Calendrie> {
    return this.http.post<Calendrie>(
      'http://localhost:8080/Calendars/',
      calendar
    );
  }

  updateCalendar(calendar: Calendrie): Observable<Calendrie> {
    return this.http.put<Calendrie>(
      'http://localhost:8080/Calendars/',
      calendar
    );
  }

  deleteCalendar(id: number): Observable<Calendrie> {
    return this.http.delete<Calendrie>('http://localhost:8080/Calendars/' + id);
  }
}
