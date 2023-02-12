import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import {
  NbDialogService,
  NbToastrService,
  NbWindowService,
} from "@nebular/theme";
import { LocalDataSource } from "ng2-smart-table";
import { SmartTableData } from "../../../@core/data/smart-table";
import { Role } from "../../../models/role";
import { User } from "../../../models/user";
import { AuthenticationService } from "../../../services/authentication.service";
import { WindowFormComponent } from "../../modal-overlays/window/window-form/window-form.component";
import { DatePipe } from "@angular/common";
import { DeleteUserConfirmationComponent } from "./delete-user-confirmation/delete-user-confirmation.component";

@Component({
  selector: "ngx-utilisateur",
  templateUrl: "./utilisateur.component.html",
  styleUrls: ["./utilisateur.component.scss"],
})
export class UtilisateurComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  user!: User[];
  role!: Role[];
  mode: number = 0;

  settings1 = {
    actions: { add: false },
    /*  hideSubHeader: true, */
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },

    columns: {
      username: {
        title: "Utilisateur",
        type: "string",
      },

      password: {
        title: "Mot de passe",
        type: "string",
      },

      creationDate: {
        title: "Date de création",
        type: "string",
        valuePrepareFunction: (creationDate) => {
          var raw = new Date(creationDate);
          var formatted = this.datePipe.transform(raw, "MMM d, y, h:mm:ss a");
          return formatted;
        },
      },

      isLocked: {
        title: "Verrouillé",
        type: "string",
      },

      roles: {
        title: "Role",
        type: "string",
        valuePrepareFunction: (roles) => {
          return roles[0].roleName;
        },
      },
    },
  };

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private windowService: NbWindowService,
    private toastrService: NbToastrService,
    private _router: Router,
    private datePipe: DatePipe,
    private dialogService: NbDialogService
  ) {}

  ngOnInit(): void {
    this.initialize();
  }
  initialize() {
    this.authService.getUsers().subscribe((data1: User[]) => {
      this.user = data1;
      console.log(data1);
    });
  }

  editData(value) {
    console.log(value.newData);

    this.authService.updateUser(value.newData).subscribe((data) => {
      this.toastrService.success(
        "Utilisateur modifié avec succées !",
        "Success"
      );
      this.initialize();
    });
  }

  deleteData(value) {
    console.log(value.data.id);
    this.dialogService
      .open(DeleteUserConfirmationComponent, {
        context: {
          userId: value.data.id,
        },
      })
      .onClose.subscribe(() => {
        this.initialize();
      });
  }
}
