import { Component, OnInit } from "@angular/core";
import { NbDialogService, NbToastrService } from "@nebular/theme";
import { ContractState } from "../../../models/enum/contract-state";
import { EngagementService } from "../../../services/referenciel/engagement.service";
import { ConsultationCreditDetailsComponent } from "../consultation-credit-details/consultation-credit-details.component";
import { ValidationCreditDetailsComponent } from "../validation-credit-details/validation-credit-details.component";

@Component({
  selector: "ngx-validation-credit",
  templateUrl: "./validation-credit.component.html",
  styleUrls: ["./validation-credit.component.scss"],
})
export class ValidationCreditComponent implements OnInit {
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
  nomComplet: any;
  constructor(
    private toastrService: NbToastrService,
    private engagementService: EngagementService,
    private dialogService: NbDialogService
  ) {}

  ngOnInit(): void {
    this.initialize();
  }

  initialize() {
    this.engagementService.engagementList().subscribe((engagementList: any) => {
      this.engagementList = engagementList.filter((engagement) => {
        return engagement.valid == ContractState.PREVIEW;
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
    this.dialogService.open(ValidationCreditDetailsComponent, {
      context: {},
      autoFocus: false,
    });
  }
  onSelect(event) {
    console.log(event.data);
    this.dialogService
      .open(ValidationCreditDetailsComponent, {
        context: {
          inputData: event.data,
        },
      })
      .onClose.subscribe(() => {
        this.initialize();
      });
  }
  onDeleteRowSelect(event) {
    //Need validation to delete
  }
}
