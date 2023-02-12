import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { Contact } from '../../../models/contact';
import { Group } from '../../../models/group';
import { Role } from '../../../models/role';
import { ClientService } from '../../../services/referenciel/client.service';
import { ContactService } from '../../../services/referenciel/contact.service';
import { GroupService } from '../../../services/referenciel/group.service';
import { RoleService } from '../../../services/referenciel/role.service';

@Component({
  selector: 'ngx-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.scss']
})
export class UpdateClientComponent implements OnInit {
  registerForm: FormGroup;
  form!: FormGroup;
  role : Role[];
  group: Group[];
  languageList: string[] = ['EN', 'FR', 'AR', 'DE'];
  formContact: FormGroup;
  contactData!: Contact[];


  constructor( private formBuilder: FormBuilder,
              private toastrService: NbToastrService,
              private _router: Router,
              private clientService: ClientService,
              private contactService: ContactService,
              private groupService: GroupService,
              private roleService: RoleService,
              private toastr: NbToastrService,

              ) { }

  ngOnInit(): void {
    this.roleService.getAllRoles().subscribe(data =>{
      this.role = data
    })
    this.groupService.getAllGroups().subscribe(data1 =>{
      this.group = data1
    })
    var data = JSON.parse(localStorage.getItem('Person'));
    console.log(data)
    this.registerForm = this.formBuilder.group({
      id : (data.id),
      libcou: new FormControl( '', Validators.required),
      liblon: new FormControl('', Validators.required),
      resident : new FormControl('', Validators.required),
      firstName: new FormControl( '', Validators.required),
      lastName: new FormControl('', Validators.required),
      gender: new FormControl( '', Validators.required),
      birthday: new FormControl('', Validators.required),
      customerType: [1],
      role:[],
      group:[]
  })
  this.formContact = this.formBuilder.group({
    id: [],
    translatedAddress: new FormControl( '' ),
    phone: new FormControl( '' ),
    mobile: new FormControl( '' ),
    fax: new FormControl( '' ),
    email: new FormControl( '' ),
    zipCode: new FormControl( '' ),
    freeText: new FormControl( '' ),
    contactFunction: new FormControl( '' ),
    contactName: new FormControl( '' ),
    language: new FormControl( '' ),
    formulePolitesse: new FormControl( '' ),
    tier: [{ id: data.id }],
  });
  this.registerForm.controls['libcou'].setValue(data.libcou);
  this.registerForm.controls['liblon'].setValue(data.liblon);
  this.registerForm.controls['resident'].setValue(data.resident);
  this.registerForm.controls['firstName'].setValue(data.firstName);
  this.registerForm.controls['lastName'].setValue(data.lastName);
  this.registerForm.controls['gender'].setValue(data.gender);
  this.registerForm.controls['birthday'].setValue(data.birthday);
  this.registerForm.controls['role'].setValue(data.role);
  this.registerForm.controls['group'].setValue(data.group);



  this.contactService.getContactByTierId(data.id).subscribe({
    next: (result) => {
      this.contactData = result;
      if (this.contactData!.length != 0) {
        this.formContact.controls['translatedAddress'].setValue(
          this.contactData[0].translatedAddress
        );
        this.formContact.controls['phone'].setValue(
          this.contactData[0].phone
        );
        this.formContact.controls['mobile'].setValue(
          this.contactData[0].mobile
        );
        this.formContact.controls['fax'].setValue(this.contactData[0].fax);
        this.formContact.controls['email'].setValue(
          this.contactData[0].email
        );
        this.formContact.controls['zipCode'].setValue(
          this.contactData[0].zipCode
        );
        this.formContact.controls['freeText'].setValue(
          this.contactData[0].freeText
        );
        this.formContact.controls['contactFunction'].setValue(
          this.contactData[0].contactFunction
        );
        this.formContact.controls['contactName'].setValue(
          this.contactData[0].contactName
        );
        this.formContact.controls['language'].setValue(
          this.contactData[0].language
        );
        this.formContact.controls['formulePolitesse'].setValue(
          this.contactData[0].formulePolitesse
        );
        this.formContact.controls['language'].setValue(
          this.contactData[0].language
        );
      }
    },
  });
  }

  onSubmit(value){
    console.log(value)
    this.clientService.updateClient(value).subscribe(data =>{
      this.toastrService.success('Tier ajouté avec succées' , 'Success');
      this._router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
        this._router.navigate(['/pages/miscellaneous/Client']);
    });
    });

      if (this.contactData.length == 0) {
        this.contactService.addContact(this.formContact.value).subscribe({
          next: (result) => {
            this.formContact.reset();

          },
          error: (err) => {
            this.toastr.danger('Erreur', 'Erreur détectée', {

            });
          },
        });
      } else {
        this.formContact.controls['id'].setValue(this.contactData[0].id);
        this.contactService.updateContact(this.formContact.value).subscribe({
          next: (result) => {
            this.formContact.reset();
          },
        });

    }

  };



  onReset(){

  }

}
