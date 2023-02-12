import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../../models/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>('http://localhost:8080/Employees');
  }

  addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(
      'http://localhost:8080/Employees/',
      employee
    );
  }

  updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(
      'http://localhost:8080/Employees/',
      employee
    );
  }

  deleteEmployee(id: number): Observable<Employee> {
    return this.http.delete<Employee>('http://localhost:8080/Employees/' + id);
  }
}
