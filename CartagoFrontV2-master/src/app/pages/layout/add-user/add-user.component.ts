import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";
import { Location } from "@angular/common";
import { concatMap, map, tap, switchMap, timeout } from "rxjs/operators";

import {
  NbComponentStatus,
  NbGlobalLogicalPosition,
  NbGlobalPhysicalPosition,
  NbGlobalPosition,
  NbToastrConfig,
  NbToastrService,
} from "@nebular/theme";
import { User } from "../../../models/user";
import { AuthenticationService } from "../../../services/authentication.service";
import { Role } from "../../../models/role";
import { RoleUser } from "../../../models/roleUser";
import { Router } from "@angular/router";

@Component({
  selector: "ngx-add-user",
  templateUrl: "./add-user.component.html",
  styleUrls: ["./add-user.component.scss"],
})
export class AddUserComponent implements OnInit {
  submitted = false;
  registerForm: FormGroup;
  user!: User;
  role!: Role[];
  roleUser!: RoleUser;
  array: Array<any> = [];
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private toastrService: NbToastrService,
    private location: Location,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required),
      roles: new FormControl("", Validators.required),
      creationDate: new FormControl(new Date(Date.now())),
    });

    this.authService.getRoles().subscribe({
      next: (result) => {
        console.log(result);
        this.role = result;
      },
    });
  }

  onSubmit(value) {
    //this.addRoleToUser(value);

    //this.registerForm.get("roles").setValue("");
    console.log(this.registerForm.value);
    this.addUsser(value);
  }

  addUsser(value) {
    return this.authService.addUserWithRole(value).subscribe(
      (data) => {
        this.toastrService.success("Tier ajouté avec succées !", "Success");

        this._router.navigate(["/pages/tables/utilisateur1"]);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  addRoleToUser(value) {
    this.authService.addRoleToUser(value).subscribe(
      (data) => {
        this.toastrService.success("Tier ajouté avec succées !", "Success");
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}
