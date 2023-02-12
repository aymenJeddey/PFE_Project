import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { Group } from '../../../models/group';
import { Role } from '../../../models/role';
import { Tier } from '../../../models/tier';
import { ClientService } from '../../../services/referenciel/client.service';
import { GroupService } from '../../../services/referenciel/group.service';
import { RoleService } from '../../../services/referenciel/role.service';
import { TierService } from '../../../services/referenciel/tier.service';

@Component({
  selector: 'ngx-addclient',
  templateUrl: './addclient.component.html',
  styleUrls: ['./addclient.component.scss']
})
export class AddclientComponent implements OnInit {
  registerForm: FormGroup;
  form!: FormGroup;

  role : Role[];
  group: Group[];



  constructor(
              private formBuilder: FormBuilder,
              private toastrService: NbToastrService,
              private _router: Router,
              private clientService: ClientService,
              private roleService: RoleService,
              private groupService: GroupService
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      libcou: new FormControl( '', Validators.required),
      liblon: new FormControl('', Validators.required),
      resident : new FormControl(false, Validators.required),
      firstName: new FormControl( '', Validators.required),
      lastName: new FormControl('', Validators.required),
      gender: new FormControl( '', Validators.required),
      birthday: new FormControl('', Validators.required),
      customerType: [1],
      role: [''],
      group: ['']

  })


  this.roleService.getAllRoles().subscribe(data =>{
    this.role = data
    console.log(data)
  })
  this.groupService.getAllGroups().subscribe(data1 =>{
    this.group = data1
  })


}

onSubmit(){
  if(this.registerForm.value.group && this.registerForm.value.role){
   this.registerForm.controls['group'].setValue({
    id: this.registerForm.value.group,
  });
  this.registerForm.controls['role'].setValue({
    id: this.registerForm.value.role,
  });
}
  console.log(this.registerForm.value)

  this.clientService.addClient(this.registerForm.value).subscribe(data =>{
    this.toastrService.success('Particulier ajouté avec succées' , 'Success');
    this._router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
      this._router.navigate(['/pages/miscellaneous/Client']);
  });
  })

};

onReset(){

};




  }

