import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Role } from '../../models/role';

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  constructor(private http: HttpClient) {}

  getAllRoles(): Observable<Role[]> {
    return this.http.get<Role[]>('http://localhost:8080/Roles');
  }

  addRole(role: Role): Observable<Role> {
    return this.http.post<Role>('http://localhost:8080/Roles/', role);
  }

  updateRole(role: Role): Observable<Role> {
    return this.http.put<Role>('http://localhost:8080/Roles/', role);
  }

  deleteRole(id: number): Observable<Role> {
    return this.http.delete<Role>('http://localhost:8080/Roles/' + id);
  }
}
