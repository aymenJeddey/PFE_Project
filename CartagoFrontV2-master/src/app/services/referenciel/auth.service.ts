import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _loginUrl = 'http://localhost:8999/api/login';
  private _getUserByUsernameUrl = 'http://localhost:8999/api/getUserByUsername';
  constructor(private http: HttpClient, private _router: Router) {}

  loginUser(user: any) {
    return this.http.get<any>(
      this._loginUrl + '?username=' + user.user + '&password=' + user.pass
    );
  }

  getUserByUsername(user: any) {
    return this.http.get<any>(
      this._getUserByUsernameUrl + '?username=' + user.user
    );
  }

  logoutUser() {
    localStorage.removeItem('token');
    this._router.navigate(['/events']);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }
}
