import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NbDialogService, NbToastrService } from "@nebular/theme";
import { ContractState } from "../../../models/enum/contract-state";
import { EngagementService } from "../../../services/referenciel/engagement.service";
import { AmortissementTableComponent } from "../amortissement-table/amortissement-table.component";
import { DeviseSelectComponent } from "../Devices/devise-select/devise-select.component";
import { NumAccountSelectComponent } from "../num-account-select/num-account-select.component";
import { TiersComponent } from "../tiers/tiers.component";

@Component({
  selector: "ngx-add-engagement",
  templateUrl: "./add-engagement.component.html",
  styleUrls: ["./add-engagement.component.scss"],
})
export class AddEngagementComponent implements OnInit {
  formEngagement!: FormGroup;
  engagement: any;
  appercue = false;
  min: Date;

  constructor(
    private dialogService: NbDialogService,
    private formbuilder: FormBuilder,
    private toastrService: NbToastrService,
    private engagementService: EngagementService
  ) {
    this.min = new Date(Date.now());
  }

  ngOnInit(): void {
    this.formEngagement = this.formbuilder.group({
      typeEngagement: [, Validators.required],
      tier: [, Validators.required],
      dateValeur: [, Validators.required],
      dateEch: [, Validators.required],
      nbrJour: [, Validators.required],
      typeAnnuite: [, Validators.required],
      periodiciteCapital: [, Validators.required],
      periodiciteInteret: [, Validators.required],
      tauxInteret: [, Validators.required],
      premierPaymentCapital: [, Validators.required],
      premierPaymentInteret: [, Validators.required],
      montant: [, Validators.required],
      agency: [],
      account: [, Validators.required],
      devise: [, Validators.required],
      valid: [ContractState.PREVIEW],
    });
    this.init();
  }

  selectTier() {
    this.dialogService
      .open(TiersComponent, {
        context: {},
      })
      .onClose.subscribe((data) => {
        this.formEngagement
          .get("tier")
          .setValue(
            JSON.parse(localStorage.getItem("tier")).libcou +
              " " +
              JSON.parse(localStorage.getItem("tier")).liblon
          );
        this.toastrService.success("Tier selectionné avec succès", "Succès", {
          duration: 1500,
        });
      });
  }
  selectDevise() {
    this.dialogService
      .open(DeviseSelectComponent, {
        context: {},
      })
      .onClose.subscribe((data) => {
        this.formEngagement
          .get("devise")
          .setValue(JSON.parse(localStorage.getItem("devise")).name);
        this.toastrService.success("Devise selectionné avec succès", "Succès", {
          duration: 1500,
        });
      });
  }

  selectAccount() {
    this.dialogService
      .open(NumAccountSelectComponent, { context: {} })
      .onClose.subscribe((data) => {
        this.formEngagement
          .get("account")
          .setValue(JSON.parse(localStorage.getItem("accountNum")).rib);
        this.toastrService.success("Devise selectionné avec succès", "Succès", {
          duration: 1500,
        });
      });
  }

  enregistrer() {
    console.log(this.formEngagement.value);
    this.engagement.tierId = JSON.parse(localStorage.getItem("tier")).id;
    this.engagement.deviseId = JSON.parse(localStorage.getItem("devise")).id;
    this.engagement.accountId = JSON.parse(
      localStorage.getItem("accountNum")
    ).id;
    this.engagement.valid = ContractState.PREVIEW;
    this.engagementService.add(this.engagement).subscribe({
      next: (data) => {
        this.toastrService.success(
          "Enregistrement effectué avec succès",
          "Succès",
          {
            duration: 1500,
          }
        );
      },
    });
    this.reset();
  }

  preview() {
    this.engagementService.preview(this.formEngagement.value).subscribe({
      next: (data) => {
        console.log(data.data);
        this.engagement = data.data.engagement;
        this.dialogService
          .open(AmortissementTableComponent, {
            context: {
              amortissement: data.data.engagement.amortissement,
            },
          })
          .onClose.subscribe((data) => {
            this.appercue = true;
          });
      },
      error: (err) => {
        this.toastrService.warning(
          "Verifier les champs du formulaire",
          "Erreur",
          {
            duration: 1500,
          }
        );
      },
    });
  }

  ngOnDestroy(): void {
    localStorage.removeItem("tier");
    localStorage.removeItem("devise");
    localStorage.removeItem("accountNum");
  }

  init() {
    this.formEngagement.get("dateEch").valueChanges.subscribe((value) => {
      this.formEngagement.get("nbrJour").setValue(this.getNbrJour());
    });

    this.formEngagement.get("nbrJour").valueChanges.subscribe((value) => {
      setTimeout(() => {
        this.formEngagement.get("dateEch").setValue(this.getDateEch());
      }, 500);
    });

    this.formEngagement
      .get("periodiciteCapital")
      .valueChanges.subscribe((value) => {
        this.formEngagement
          .get("premierPaymentCapital")
          .setValue(this.setDateTombee(value));
      });

    this.formEngagement
      .get("periodiciteInteret")
      .valueChanges.subscribe((value) => {
        this.formEngagement
          .get("premierPaymentInteret")
          .setValue(this.setDateTombee(value));
      });
  }

  setDateTombee(value: any) {
    const dateValeur = new Date(this.formEngagement.get("dateValeur").value);
    if (value == "Mensuelle") {
      return new Date(dateValeur.setMonth(dateValeur.getMonth() + 1));
    } else if (value == "Trimestrielle") {
      return new Date(dateValeur.setMonth(dateValeur.getMonth() + 3));
    } else if (value == "Semestrielle") {
      return new Date(dateValeur.setMonth(dateValeur.getMonth() + 6));
    } else if (value == "Annuelle") {
      return new Date(dateValeur.setFullYear(dateValeur.getFullYear() + 1));
    }
  }
  getNbrJour() {
    const dateEch = new Date(this.formEngagement.get("dateEch").value);
    const dateValeur = new Date(this.formEngagement.get("dateValeur").value);
    const nbrJour = Math.ceil(
      (dateEch.getTime() - dateValeur.getTime()) / (1000 * 3600 * 24)
    );
    return nbrJour;
  }

  getDateEch() {
    const dateValeur = new Date(this.formEngagement.get("dateValeur").value);
    const nbrJour = this.formEngagement.get("nbrJour").value;
    const dateEch = new Date(
      dateValeur.getTime() + nbrJour * 24 * 60 * 60 * 1000
    );
    return dateEch;
  }

  reset() {
    this.formEngagement.reset();
  }
}
