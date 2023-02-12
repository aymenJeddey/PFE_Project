import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../../services/authentication.service";
import { Router } from "@angular/router";

import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NbLogoutComponent } from "@nebular/auth";
import { NbToastrService } from "@nebular/theme";

@Component({
  selector: "ngx-connexion",
  templateUrl: "./connexion.component.html",
  styleUrls: ["./connexion.component.scss"],
})
export class ConnexionComponent implements OnInit {
  mode = 0;
  hide = true;
  formData!: FormGroup;
  constructor(
    private formbuilder: FormBuilder,
    private _auth: AuthenticationService,
    private _router: Router,
    private toastr: NbToastrService
  ) {}

  ngOnInit(): void {
    this._router
      .navigateByUrl("/RefreshComponent", { skipLocationChange: true })
      .then(() => {
        this._router.navigate(["/auth/connexion"]);
      });
    this.logout();
    /*  let token: string;
    token = this.authService.loadToken();
    if (token)
      this.router.navigateByUrl('/pages'); */
    this.formData = this.formbuilder.group({
      user: [, Validators.required],
      pass: [, Validators.required],
    });
  }
  /*   login(formData) {
    console.log(formData);
    this.authService.login(formData)
      .subscribe(resp => {
          let jwtToken: string;
          jwtToken = resp.body['access-token'];
          console.log(jwtToken);
          console.log(resp.body);
        this.authService.saveToken(jwtToken);
        // @ts-ignore
// tslint:disable-next-line:whitespace
        this.authService.saveRefreshToken(resp.body['refresh-token']);
        window.location.reload();
        this.router.navigateByUrl('/pages');
      },
        error => {
        this.mode = 1;
        });
   */

  login() {
    /*         this.toastr.danger('Mot de passe invalide',"ERREUR") */
    this._router
      .navigateByUrl("/RefreshComponent", { skipLocationChange: true })
      .then(() => {
        this._router.navigate(["/auth/connexion"]);
      });
    this._auth.loginUser(this.formData.value).subscribe(
      (res) => {
        console.log(this.formData.value);
        localStorage.setItem("token", res.access_token);
        localStorage.setItem("nomTier", JSON.stringify(this.formData.value));
        console.log(res.access_token);
        this._auth.getUserByUsername(this.formData.value).subscribe(
          (res) => {
            console.log(res);
            localStorage.setItem("user", res.roles[0].roleName);
            if (res.roles[0].roleName == "ADMIN") {
              this._router.navigate(["/pages/tables/utilisateur1"]);
            } else {
              this._router.navigate(["/pages"]);
            }
          },
          (err) => {
            console.log(err);
          }
        );
      },
      (err) => {
        console.log(err);
      }
    );
  }
  logout() {
    this._auth.logout();
  }
}
