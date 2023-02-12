import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Group } from '../../models/group';

@Injectable({
  providedIn: 'root',
})
export class GroupService {
  constructor(private http: HttpClient) {}

  getAllGroups(): Observable<Group[]> {
    return this.http.get<Group[]>('http://localhost:8080/Groups');
  }

  addGroup(group: Group): Observable<Group> {
    return this.http.post<Group>('http://localhost:8080/Groups/', group);
  }

  updateGroup(group: Group): Observable<Group> {
    return this.http.put<Group>('http://localhost:8080/Groups/', group);
  }

  deleteGroup(id: number): Observable<Group> {
    return this.http.delete<Group>('http://localhost:8080/Groups/' + id);
  }
}
