import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, of } from "rxjs";
import { User } from "../models/user";
import { JwtHelperService } from "@auth0/angular-jwt";
import { tap, catchError } from "rxjs/operators";
import { Role } from "../models/role";
import { RoleUser } from "../models/roleUser";

@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  private _loginUrl = "http://localhost:8088/api/login";
  private _getUserByUsernameUrl = "http://localhost:8088/api/getUserByUsername";
  user: User[];
  private roles: Array<any> = [];
  jwtToken: any;
  authenticated: boolean;
  jwtRefreshToken: any;
  constructor(private http: HttpClient, private _router: Router) {}

  loginUser(user: any) {
    return this.http.get<any>(
      this._loginUrl + "?username=" + user.user + "&password=" + user.pass
    );
  }
  addUser(user: any): Observable<User> {
    return this.http.post<User>("http://localhost:8088/api/user", user);
  }
  addRole(role: any): Observable<Role> {
    return this.http.post<Role>("http://localhost:8088/api/role", role);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>("http://localhost:8088/api/user");
  }

  getRoles(): Observable<Role[]> {
    return this.http.get<Role[]>("http://localhost:8088/api/role");
  }

  addUserWithRole(user: any): Observable<User> {
    return this.http.post<User>(
      "http://localhost:8088/api/user-with-role/",
      user
    );
  }

  addRoleToUser(roleUser: RoleUser): Observable<RoleUser> {
    return this.http.post<RoleUser>(
      "http://localhost:8088/api/RoleToUser",
      roleUser
    );
  }
  updateUser(user: User): Observable<User> {
    return this.http.put<User>("http://localhost:8088/api/user", user);
  }
  updateRole(role: Role): Observable<Role> {
    return this.http.put<Role>("http://localhost:8088/api/role", role);
  }
  deleteUser(id: number): Observable<User> {
    return this.http.delete<User>("http://localhost:8088/api/user/" + id);
  }
  deleteRole(id: number): Observable<Role> {
    return this.http.delete<Role>("http://localhost:8088/api/role/" + id);
  }
  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }

  getUserByUsername(user: any) {
    return this.http.get<any>(
      this._getUserByUsernameUrl + "?username=" + user.user
    );
  }

  getToken() {
    return localStorage.getItem("token");
  }

  loggedIn() {
    return !!localStorage.getItem("token");
  }

  loadUser() {
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(localStorage.getItem("token"));
    this.user = decodedToken;
    this.roles = decodedToken.roles;
    console.log(this.user);
    return this.user;
  }

  /*  loadUser() {
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(this.loadToken());
    this.user = decodedToken;
    this.roles = decodedToken.roles;
    console.log(this.user)
    return this.user;

  } */
  /*   loadToken(): any {
    throw new Error('Method not implemented.');
  } */

  /* loadUser() {
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(this.loadToken());
    this.user = decodedToken;
    this.roles = decodedToken.roles;
    return this.user;
  }
  loadToken(): any {
    throw new Error('Method not implemented.');
  }

  isAdmin() {
    return this.roles.indexOf('ADMIN') >= 0;
   }
   isUser() {
     return this.roles.indexOf('USER') >= 0;
   }
   saveToken(jwtToken) {
    this.jwtToken = jwtToken;
    localStorage.setItem('token', jwtToken);
    this.authenticated = true;
    let jwtHelper: JwtHelperService;
    jwtHelper = new JwtHelperService();
    this.roles = jwtHelper.decodeToken(this.jwtToken).roles;
  }

  saveRefreshToken(jwtRefreshToken) {
    this.jwtRefreshToken = jwtRefreshToken;
    localStorage.setItem('refresh_token', jwtRefreshToken);
  }

  loadRefreshToken() {
    this.jwtRefreshToken = localStorage.getItem('refresh_token');
    return this.jwtRefreshToken;
  }
  isAuthenticated() {
    return this.authenticated;
  }

  getAuths(url) {
    if (this.jwtToken == null) this.loadToken();
    return this.http.get(this._loginUrl + url);
  }

  saveAuths(url, data) {
    let headers: HttpHeaders;
    headers = new HttpHeaders();
    headers.append('authorization', this.jwtToken);
    return this.http.post(this._loginUrl + url, data);
  }

  tokenExpired(token: string) {
    if (token == null) {
      this.logout();
    }
    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    if ((Math.floor((new Date).getTime() / 1000)) >= expiry) {
      return true;
    }
    return false;
  }

  refreshToken() {
    const refreshToken = this.loadRefreshToken();
    const jwtToken = this.loadToken();
    return this.http.get(this._loginUrl + '/refreshToken', {
      headers: new HttpHeaders({
        'authorization': 'Bearer ' + refreshToken,
      }),
    }).pipe(
      tap((tokens) => {
        this.saveToken(tokens['accessToken']);
      }),
      catchError((error) => {
        this.logout();
        return of(false);
      }),
    );
  }

 */
}
