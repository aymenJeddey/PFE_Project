import { Component, OnInit } from "@angular/core";
import { NbDialogRef, NbToastrService } from "@nebular/theme";
import { AuthenticationService } from "../../../../services/authentication.service";

@Component({
  selector: "ngx-delete-user-confirmation",
  templateUrl: "./delete-user-confirmation.component.html",
  styleUrls: ["./delete-user-confirmation.component.scss"],
})
export class DeleteUserConfirmationComponent implements OnInit {
  userId: any;
  constructor(
    private authService: AuthenticationService,
    private toastrService: NbToastrService,
    private dialog: NbDialogRef<DeleteUserConfirmationComponent>
  ) {}

  ngOnInit(): void {}

  onAccept() {
    this.authService.deleteUser(this.userId).subscribe((data) => {
      this.toastrService.success(
        "Utilisateur Supprimé avec succées !",
        "Success"
      );
      this.onReset();
    });
  }

  onReset() {
    this.dialog.close();
  }
}
