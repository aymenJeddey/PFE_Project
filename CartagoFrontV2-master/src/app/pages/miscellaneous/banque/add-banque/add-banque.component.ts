import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { Group } from '../../../../models/group';
import { Role } from '../../../../models/role';
import { BanqueService } from '../../../../services/referenciel/banque.service';
import { ContactService } from '../../../../services/referenciel/contact.service';
import { GroupService } from '../../../../services/referenciel/group.service';
import { RoleService } from '../../../../services/referenciel/role.service';

@Component({
  selector: 'ngx-add-banque',
  templateUrl: './add-banque.component.html',
  styleUrls: ['./add-banque.component.scss']
})
export class AddBanqueComponent implements OnInit {
  role: Role[]
  group: Group[]
  registerForm: FormGroup
  constructor( private formbuilder: FormBuilder,
    private banqueService: BanqueService,
    private toastrService: NbToastrService,
    private groupService: GroupService,
    private roleService: RoleService,
    private contactService: ContactService,
    private _router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.formbuilder.group({
      id: [],
      resident: [false],
      libcou: ['', Validators.required],
      liblon: ['', Validators.required],
      customerType: [0],
      agcent: [],
      bqloc: [false],
      codbct: [],
      reference: [],
      group: [],
      role: [],
    });
    this.roleService.getAllRoles().subscribe(data =>{
      this.role = data
      console.log(data)
    })
    this.groupService.getAllGroups().subscribe(data1 =>{
      this.group = data1
    })

  }
  onSubmit(value){
    console.log(value)
    this.banqueService.addBanque(value).subscribe(data =>{
      this.toastrService.success('Particulier ajouté avec succées' , 'Success');
      this._router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
        this._router.navigate(['/pages/miscellaneous/Bank']);
    });
    })

  };

  onReset(){

  };

}
