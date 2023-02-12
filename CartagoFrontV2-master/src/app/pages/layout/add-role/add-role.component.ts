import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NbToastrService } from '@nebular/theme';
import { AuthenticationService } from '../../../services/authentication.service';
import {Location} from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'ngx-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.scss']
})
export class AddRoleComponent implements OnInit {
  submitted = false;
  registerForm: FormGroup;
  _router : Router
  constructor(private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private toastrService: NbToastrService,
    private location: Location,
   ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      roleName: new FormControl( '', Validators.required),

  })
  }
  onSubmit(value) {

    this.addRole(value);
    console.log(value);


}
addRole(value){

  console.log(value);
  this.authService.addRole(value).subscribe(data =>{
    this.toastrService.success('Tier ajouté avec succées !' , 'Success');
  },
  error => {
    console.log(error);
  });
}
onReset() {
  this.submitted = false;
  this.registerForm.reset();

}
}
