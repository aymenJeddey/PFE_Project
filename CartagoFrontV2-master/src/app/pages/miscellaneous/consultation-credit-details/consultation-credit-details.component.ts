import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { NbDialogRef, NbDialogService, NbToastrService } from "@nebular/theme";
import { Group } from "../../../models/group";
import { Role } from "../../../models/role";
import { Tier } from "../../../models/tier";
import { AccountService } from "../../../services/referenciel/account.service";
import { EngagementService } from "../../../services/referenciel/engagement.service";
import { GroupService } from "../../../services/referenciel/group.service";
import { RoleService } from "../../../services/referenciel/role.service";
import { TierService } from "../../../services/referenciel/tier.service";
import { AmortissementTableComponent } from "../amortissement-table/amortissement-table.component";
import { EngagementListComponent } from "../engagement-list/engagement-list.component";

@Component({
  selector: "ngx-consultation-credit-details",
  templateUrl: "./consultation-credit-details.component.html",
  styleUrls: ["./consultation-credit-details.component.scss"],
})
export class ConsultationCreditDetailsComponent implements OnInit {
  inputData: any;
  tierData: any;
  accountData: any;
  registerForm: FormGroup;
  registerForm1: FormGroup;
  engagement: any;
  appercue = false;

  amortissement:any;
  role : Role[];
  group: Group[];
  settings = {
    mode: "external",
    hideSubHeader: true,
    actions: false,
    columns: {
      libcou: {
        title: "Libellé Court",
        type: "string",
      },
      liblon: {
        title: "Libellé Long",
        type: "string",
      },
      customerType: {
        title: "Type de client",
        type: "string",
      },
    },
  };
  settings1 = {
    mode: "external",
    hideSubHeader: true,
    actions: false,
    columns: {
      rib: {
        title: "RIB",
        type: "string",
      },
      solde: {
        title: "Solde",
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
      active: {
        title: "Actif",
        type: "string",
      },
    },
  };
  settings2 = {
    mode: "external",
    hideSubHeader: true,
    actions: false,
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
      debut: {
        title: "Date valeur",
        type: "string",
      },
      fin: {
        title: "Date écheance",
        type: "string",
      },
      nbJours: {
        title: "Nombre de jours",
        type: "string",
      },
      capitalInvestiValue: {
        title: "Capital Investi",
        type: "string",
      },
      capitalRestantValue: {
        title: "Capital Restant du",
        type: "string",
      },
      amortissement: {
        title: "Amortissement",
        type: "string",
      },
      annuite: {
        title: "Annuite",
        type: "string",
        //valuePrepareFunction: (roles) => {},
      },
    },
  };
  constructor( private formBuilder: FormBuilder,
    private toastrService: NbToastrService,
    private _router: Router,
    private roleService: RoleService,
    private groupService: GroupService,
    private tierService: TierService,
    private accountService: AccountService,
    private engagementService: EngagementService,
    private dialogService: NbDialogService,
    private dialogRef: NbDialogRef<EngagementListComponent>

  ) {}

  ngOnInit(): void {
    this.amortissement = this.inputData.amortissement;
    this.registerForm = this.formBuilder.group({
      libcou: new FormControl( '', Validators.required),
      liblon: new FormControl('', Validators.required),
      customerType: [],
      role: [''],
      group: ['']

  })
  this.registerForm1 = this.formBuilder.group({
    rib: ['',Validators.required],
    solde: ['',Validators.required],
    numCpt: ['',Validators.required],
    active: ['',Validators.required],
    typeAccount: ['',Validators.required],
    currency: ['', Validators.required],

  })





    console.log(this.inputData)
    this.tierService
      .getTierByIdFromEngagement(this.inputData.tierId)
      .subscribe((response) => {
        this.tierData = response;
        console.log(this.tierData[0]);

          this.registerForm.controls['libcou'].setValue(this.tierData[0].libcou)
        this.registerForm.controls['liblon'].setValue(this.tierData[0].liblon)
        this.registerForm.controls['customerType'].setValue(this.tierData[0].customerType)
        this.registerForm.controls['role'].setValue(this.tierData[0].role.role)
        this.registerForm.controls['group'].setValue(this.tierData[0].group.groupName)

    });
    this.accountService
      .getAccountByIdFromEngagement(this.inputData.accountId)
      .subscribe((response) => {
        console.log(this.inputData.accountId);
        console.log(response);
        this.accountData = response;
        this.registerForm1.controls['rib'].setValue(this.accountData[0].rib)
        this.registerForm1.controls['solde'].setValue(this.accountData[0].solde)
        this.registerForm1.controls['numCpt'].setValue(this.accountData[0].numCpt)
        this.registerForm1.controls['active'].setValue(this.accountData[0].active)
        this.registerForm1.controls['typeAccount'].setValue(this.accountData[0].typeAccount)
        this.registerForm1.controls['currency'].setValue(this.accountData[0].currency.name)

      });


  }


  onReset(){
    this.dialogRef.close();
  }
 }
