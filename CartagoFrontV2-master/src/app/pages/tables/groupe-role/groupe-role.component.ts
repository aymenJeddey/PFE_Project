import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NbWindowService, NbToastrService } from '@nebular/theme';
import { Role } from '../../../models/role';
import { User } from '../../../models/user';
import { AuthenticationService } from '../../../services/authentication.service';


@Component({
  selector: 'ngx-groupe-role',
  templateUrl: './groupe-role.component.html',
  styleUrls: ['./groupe-role.component.scss']
})
export class GroupeRoleComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  user!: User[];
  role!:Role[];
  mode: number = 0;


  settings2 = {
    hideSubHeader: true,

    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate:true,

    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave:true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },

    columns: {
      roleName: {
        title: 'Role',
        type: 'string',
        width: '95%',

      },

  },
  defaultStyle: false,
  attr: {
    class: 'table table-stripped'
  }
};

  constructor(private formBuilder: FormBuilder, private authService: AuthenticationService,
    private windowService: NbWindowService,
    private toastrService: NbToastrService,) { }

  ngOnInit(): void {
    this.initialize();
  }
  initialize(){

       this.authService.getRoles().subscribe((data: Role[]) =>{
      this.role = data;
      console.log(data);
    })
  }

 onAddRole(value1) {
      console.log(value1.newData);
      this.authService.addRole(value1.newData)
        .subscribe(data => {
          this.toastrService.success('Role ajouté avec succées !' , 'Success');
          this.initialize();

        });
      }

    editRole(value1){
      console.log(value1.newData);
      this.authService.updateRole(value1.newData)
      .subscribe(data => {
        this.toastrService.success('Role modifié avec succées !' , 'Success');
        this.initialize();
      })
    }

  deleteRole(value1){
    console.log(value1.data);

    this.authService.deleteRole(value1.data.id)
    .subscribe(data => {
      this.toastrService.success('Role Supprimé avec succées !' , 'Success');
      this.initialize();

  })
}





}
