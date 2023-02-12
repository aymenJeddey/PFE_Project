import { Component, OnInit } from "@angular/core";
import {
  NbDialogService,
  NbToastrService,
  NbWindowService,
} from "@nebular/theme";
import { repeat } from "rxjs-compat/operator/repeat";
import { Account } from "../../../models/account";
import { ContractState } from "../../../models/enum/contract-state";
import { Tier } from "../../../models/tier";
import { AccountService } from "../../../services/referenciel/account.service";
import { ClientService } from "../../../services/referenciel/client.service";
import { ValidationCompteDetailsComponent } from "../validation-compte-details/validation-compte-details.component";

@Component({
  selector: "ngx-validation-compte",
  templateUrl: "./validation-compte.component.html",
  styleUrls: ["./validation-compte.component.scss"],
})
export class ValidationCompteComponent implements OnInit {
  account: any;
  accountS: "PREVIEW";
  acc: number;

  settings = {
    mode: "external",
    hideSubHeader: false,
    actions: { delete: false, add: false },

    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true,
    },
    edit: {
      editButtonContent: '<i class="nb-checkmark" title="YourAction"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },

    columns: {
      numCpt: {
        title: "Numéro du Compte",
        type: "string",
      },

      rib: {
        title: "RIB",
        type: "string",
      },

      active: {
        title: "Actif",
        type: "boolean",
      },

      solde: {
        title: "Solde",
        type: "string",
      },

      tier: {
        title: "Nom Complet",
        type: "string",
        valuePrepareFunction: (tier) => {
          this.nomComplet = tier.firstName + " " + tier.lastName;
          return this.nomComplet;
        },
      },

      typeAccount: {
        title: "Type du compte",
        type: "string",
      },
    },
  };
  nomComplet: any;
  constructor(
    private toastrService: NbToastrService,
    private accountService: AccountService,
    private dialogService: NbDialogService,
    private windowService: NbWindowService
  ) {}

  ngOnInit(): void {
    this.initialize();
  }

  initialize() {
    this.accountService.getAllAccounts().subscribe((data) => {
      console.log(data);
      this.account = data.filter((account) => {
        return account.accountStatus == ContractState.PREVIEW;
      });
    });
  }

  /* editClient(value1){
    console.log(value1.newData);
    this.clientService.updateClient(value1.newData)
    .subscribe(data => {
      this.toastrService.success('Client modifié avec succées !' , 'Success');
      this.initialize();
    })
  } */

  onEditRowSelect(event) {
    this.dialogService
      .open(ValidationCompteDetailsComponent, {
        context: {
          inputData: event.data,
        },
        autoFocus: false,
      })
      .onClose.subscribe(() => {
        this.initialize();
      });
  }

  onDeleteRowSelect(event) {
    //Need validation to delete
    this.accountService.deleteAccount(event.data.id).subscribe((res) => {
      this.toastrService.success("Compte supprimé avec succès", "Succès", {
        duration: 1500,
      });
      this.initialize();
    });
  }
}
