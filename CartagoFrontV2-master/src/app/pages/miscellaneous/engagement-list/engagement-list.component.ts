import { Component, OnInit } from "@angular/core";
import { NbDialogService } from "@nebular/theme";
import { ContractState } from "../../../models/enum/contract-state";
import { EngagementService } from "../../../services/referenciel/engagement.service";
import { ConsultationCreditDetailsComponent } from "../consultation-credit-details/consultation-credit-details.component";

@Component({
  selector: "ngx-engagement-list",
  templateUrl: "./engagement-list.component.html",
  styleUrls: ["./engagement-list.component.scss"],
})
export class EngagementListComponent implements OnInit {
  engagementList: any;

  settings = {
    mode: "external",
    hideSubHeader: true,
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
      tier: {
        title: "Nom",
        type: "string",
      },
      typeEngagement: {
        title: "Type Engagement",
        type: "string",
      },
      dateValeur: {
        title: "Date Valeur",
        type: "string",
      },
      dateEch: {
        title: "Date échéance",
        type: "string",
      },
      account: {
        title: "Compte",
        type: "string",
      },
      montant: {
        title: "Montant",
        type: "string",
      },
    },
  };
  constructor(
    private engagementService: EngagementService,
    private dialogService: NbDialogService
  ) {}

  ngOnInit(): void {
    this.engagementService.engagementList().subscribe((engagementList: any) => {
      console.log(engagementList);
      this.engagementList = engagementList.filter((engagement) => {
        return engagement.valid == ContractState.VALIDATED;
      });
    });
  }

  onSelect(event) {
    console.log(event.data);
    this.dialogService.open(ConsultationCreditDetailsComponent, {
      context: {
        inputData: event.data,
      },
    });
  }
}
