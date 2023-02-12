import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { RoleService } from '../../../../services/referenciel/role.service';

@Component({
  selector: 'ngx-role-add',
  templateUrl: './role-add.component.html',
  styleUrls: ['./role-add.component.scss']
})
export class RoleAddComponent implements OnInit {

  registerForm: FormGroup;
  _router : Router
  constructor(private formBuilder: FormBuilder,
    private roleService: RoleService,
    private toastrService: NbToastrService,
   ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      role: new FormControl( '', Validators.required),

  })
  }
  onSubmit(value) {

    this.addRole(value);
    console.log(value);
    this._router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
      this._router.navigate(['/pages/miscellaneous/Roole']);
  });

}
addRole(value){

  console.log(value);
  this.roleService.addRole(value).subscribe(data =>{
    this.toastrService.success('Tier ajouté avec succées !' , 'Success');
  },
  error => {
    console.log(error);
  });
}
onReset() {
  this.registerForm.reset();

}
}
