import { Component, OnInit } from "@angular/core";
import { NbDialogRef, NbToastrService } from "@nebular/theme";
import { Tier } from "../../../models/tier";
import { TierService } from "../../../services/referenciel/tier.service";

@Component({
  selector: "ngx-tiers",
  templateUrl: "./tiers.component.html",
  styleUrls: ["./tiers.component.scss"],
})
export class TiersComponent implements OnInit {
  client: Tier[];
  bank: Tier[];

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
      libcou: {
        title: "Libellé Court",
        type: "string",
      },

      liblon: {
        title: "Libellé Long",
        type: "string",
      },

      birthday: {
        title: "Date de naissance",
        type: "string",
      },
    },
  };
  constructor(
    private toastrService: NbToastrService,
    private tierService: TierService,
    protected ref: NbDialogRef<TiersComponent>
  ) {}

  ngOnInit(): void {
    this.initialize();
  }

  initialize() {
    this.tierService.getPersonsFromEngagement().subscribe((client: Tier[]) => {
      this.client = client;
    });
    this.tierService.getBanksFromEngagement().subscribe((client: Tier[]) => {
      this.bank = client;
    });
  }
  onClientSelect(event) {
    localStorage.setItem("tier", JSON.stringify(event.data));
    this.ref.close();
  }

  onBankSelect(event) {
    localStorage.setItem("tier", JSON.stringify(event.data));
    this.ref.close();
  }
}
