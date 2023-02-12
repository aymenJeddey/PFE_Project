import { Component, OnDestroy, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { NbDialogRef, NbToastrService } from "@nebular/theme";
import { Contact } from "../../../models/contact";
import { ContractState } from "../../../models/enum/contract-state";
import { Group } from "../../../models/group";
import { Role } from "../../../models/role";
import { AccountService } from "../../../services/referenciel/account.service";
import { ClientService } from "../../../services/referenciel/client.service";
import { ContactService } from "../../../services/referenciel/contact.service";
import { GroupService } from "../../../services/referenciel/group.service";
import { RoleService } from "../../../services/referenciel/role.service";

@Component({
  selector: "ngx-validation-compte-details",
  templateUrl: "./validation-compte-details.component.html",
  styleUrls: ["./validation-compte-details.component.scss"],
})
export class ValidationCompteDetailsComponent implements OnInit, OnDestroy {
  form1: FormGroup;
  registerForm: FormGroup;
  form!: FormGroup;
  role: Role[];
  inputData: any;

  group: Group[];
  languageList: string[] = ["EN", "FR", "AR", "DE"];
  formContact: FormGroup;
  contactData!: Contact[];
  statut: "VALIDATED";

  constructor(
    private formBuilder: FormBuilder,
    private _router: Router,
    private clientService: ClientService,
    private compteService: AccountService,
    private contactService: ContactService,
    private groupService: GroupService,
    private roleService: RoleService,
    private toastr: NbToastrService,
    private dialogService: NbDialogRef<ValidationCompteDetailsComponent>,
    private accountService: AccountService
  ) {}
  ngOnDestroy(): void {
    localStorage.removeItem("validate");
  }

  ngOnInit(): void {
    this.roleService.getAllRoles().subscribe((data) => {
      this.role = data;
    });
    this.groupService.getAllGroups().subscribe((data1) => {
      this.group = data1;
    });
    var data = this.inputData;
    console.log(data);
    this.form1 = this.formBuilder.group({
      cloture: ["", Validators.required],
      dateCloture: ["", Validators.required],
      rib: ["", Validators.required],
      description: ["", Validators.required],
      solde: ["", Validators.required],
      numCpt: ["", Validators.required],
      active: ["", Validators.required],
      typeAccount: ["", Validators.required],
      agency: ["", Validators.required],
      currency: ["", Validators.required],
      tier: ["", Validators.required],
      statut: [""],
    });
    this.registerForm = this.formBuilder.group({
      id: data.tier.id,
      libcou: new FormControl("", Validators.required),
      liblon: new FormControl("", Validators.required),
      resident: new FormControl("", Validators.required),
      firstName: new FormControl("", Validators.required),
      lastName: new FormControl("", Validators.required),
      gender: new FormControl("", Validators.required),
      birthday: new FormControl("", Validators.required),
      customerType: [1],
      role: [],
      group: [],
    });
    this.registerForm.controls["id"].setValue(data.tier.id),
      this.registerForm.controls["libcou"].setValue(data.tier.libcou),
      this.registerForm.controls["liblon"].setValue(data.tier.liblon),
      this.registerForm.controls["resident"].setValue(data.tier.resident),
      this.registerForm.controls["firstName"].setValue(data.tier.firstName),
      this.registerForm.controls["lastName"].setValue(data.tier.lastName),
      this.registerForm.controls["gender"].setValue(data.tier.gender),
      this.registerForm.controls["birthday"].setValue(data.tier.birthday),
      this.registerForm.controls["customerType"].setValue(
        data.tier.customerType
      ),
      this.registerForm.controls["role"].setValue(data.tier.role.role),
      this.registerForm.controls["group"].setValue(data.tier.group.groupName),
      (this.formContact = this.formBuilder.group({
        id: [],
        translatedAddress: new FormControl(""),
        phone: new FormControl(""),
        mobile: new FormControl(""),
        fax: new FormControl(""),
        email: new FormControl(""),
        zipCode: new FormControl(""),
        freeText: new FormControl(""),
        contactFunction: new FormControl(""),
        contactName: new FormControl(""),
        language: new FormControl(""),
        formulePolitesse: new FormControl(""),
        tier: [{ id: data.tier.id }],
      }));

    this.form1.controls["cloture"].setValue(data.cloture);
    this.form1.controls["dateCloture"].setValue(data.dateCloture);
    this.form1.controls["rib"].setValue(data.rib);
    this.form1.controls["description"].setValue(data.description);
    this.form1.controls["solde"].setValue(data.solde);
    this.form1.controls["numCpt"].setValue(data.numCpt);
    this.form1.controls["active"].setValue(data.active);
    this.form1.controls["typeAccount"].setValue(data.typeAccount);
    this.form1.controls["agency"].setValue(data.agency.libcou);
    this.form1.controls["currency"].setValue(data.currency.name);
    this.form1.controls["tier"].setValue(data.tier.libcou);
    this.form1.controls["statut"].setValue(data.statut);

    this.contactService.getContactByTierId(data.tier.id).subscribe({
      next: (result) => {
        this.contactData = result;
        if (this.contactData!.length != 0) {
          this.formContact.controls["translatedAddress"].setValue(
            this.contactData[0].translatedAddress
          );
          this.formContact.controls["phone"].setValue(
            this.contactData[0].phone
          );
          this.formContact.controls["mobile"].setValue(
            this.contactData[0].mobile
          );
          this.formContact.controls["fax"].setValue(this.contactData[0].fax);
          this.formContact.controls["email"].setValue(
            this.contactData[0].email
          );
          this.formContact.controls["zipCode"].setValue(
            this.contactData[0].zipCode
          );
          this.formContact.controls["freeText"].setValue(
            this.contactData[0].freeText
          );
          this.formContact.controls["contactFunction"].setValue(
            this.contactData[0].contactFunction
          );
          this.formContact.controls["contactName"].setValue(
            this.contactData[0].contactName
          );
          this.formContact.controls["language"].setValue(
            this.contactData[0].language
          );
          this.formContact.controls["formulePolitesse"].setValue(
            this.contactData[0].formulePolitesse
          );
          this.formContact.controls["language"].setValue(
            this.contactData[0].language
          );
        }
      },
    });
  }

  valider() {
    this.accountService
      .updateAccountbyStatus(this.inputData.id, ContractState.VALIDATED)
      .subscribe((data) => {
        this.toastr.success("Contrat validé", "Success");
        this.onReset();
      });
  }

  refuser() {
    this.accountService
      .updateAccountbyStatus(this.inputData.id, ContractState.CANCELED)
      .subscribe((data) => {
        this.toastr.success("Contrat refusé", "Success");
        this.onReset();
      });
  }
  onReset() {
    this.dialogService.close();
  }
}
