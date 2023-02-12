import { Component, OnInit } from "@angular/core";
import { NbDialogRef, NbToastrService } from "@nebular/theme";
import { AccountService } from "../../../services/referenciel/account.service";

@Component({
  selector: "ngx-num-account-select",
  templateUrl: "./num-account-select.component.html",
  styleUrls: ["./num-account-select.component.scss"],
})
export class NumAccountSelectComponent implements OnInit {
  accountNumber: any;
  settings = {
    mode: "external",
    hideSubHeader: false,
    actions: {
      custom: [
        {
          name: "onSearch",
          title: '<i class="nb-checkmark" title="YourAction"></i>',
        },
      ],
      edit: false,
      delete: false,
    },
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
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      rib: {
        title: "RIB",
        type: "string",
      },
      numCpt: {
        title: "Numéro de compte",
        type: "string",
      },
      typeAccount: {
        title: "Type de compte",
        type: "string",
      },
    },
  };
  constructor(
    private toastrService: NbToastrService,
    protected ref: NbDialogRef<NumAccountSelectComponent>,
    private accountService: AccountService
  ) {}

  ngOnInit(): void {
    this.initialize();
  }

  initialize() {
    this.accountService
      .getAccountByTierIdFromEngagement(
        JSON.parse(localStorage.getItem("tier")).id
      )
      .subscribe((data) => {
        this.accountNumber = data;
      });
  }
  onAccountSelect(event) {
    localStorage.setItem("accountNum", JSON.stringify(event.data));
    this.ref.close();
  }
}
