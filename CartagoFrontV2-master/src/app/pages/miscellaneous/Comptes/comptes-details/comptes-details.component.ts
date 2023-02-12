import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NbToastrService } from "@nebular/theme";
import { AccountService } from "../../../../services/referenciel/account.service";
import { Account } from "../../../../models/account";
import { Tier } from "../../../../models/tier";

@Component({
  selector: "ngx-comptes-details",
  templateUrl: "./comptes-details.component.html",
  styleUrls: ["./comptes-details.component.scss"],
})
export class ComptesDetailsComponent implements OnInit {
  data = localStorage.getItem("user");
  nomComplet: any;
  comptes: any;

  settings2 = {
    mode: "external",
    actions: { add: false },

    add: {
      addButtonContent: "",
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
      tier: {
        title: "Nom",
        type: "boolean",
        valuePrepareFunction: (tier) => {
          this.nomComplet = tier.firstName + " " + tier.lastName;
          return this.nomComplet;
        },
      },

      dateCloture: {
        title: "date de Cloture",
        type: "string",
      },

      rib: {
        title: "rib",
        type: "string",
      },

      numCpt: {
        title: "Numéro Compte",
        type: "string",
      },

      solde: {
        title: "solde",
        type: "number",
      },

      description: {
        title: "description",
        type: "boolean",
      },

      accountStatus: {
        title: "Statut",
        type: "boolean",
      },
    },
  };
  constructor(
    private toastrService: NbToastrService,
    private compteService: AccountService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    console.log(this.data);
    this.initialize();
  }

  initialize() {
    this.compteService.getAllAccounts().subscribe((compte) => {
      this.comptes = compte;

      console.log(compte);
    });
  }
  onEditRowSelect(value) {
    if (this.data == "CHEF_AGENCE") {
      localStorage.setItem("compte", JSON.stringify(value.data));
      this._router.navigateByUrl("/pages/miscellaneous/updateCompte");
    } else {
      this.toastrService.danger(
        'vous n"avez pas la permission de modifier ce compte'
      );
    }
  }

  deleteData(value) {
    this.toastrService.danger(
      'vous n"avez pas la permission de supprimer ce compte'
    );
  }
}
