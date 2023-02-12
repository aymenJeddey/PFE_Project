import { Component, OnInit } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { Role } from '../../../../models/role';
import { RoleService } from '../../../../services/referenciel/role.service';

@Component({
  selector: 'ngx-role-details',
  templateUrl: './role-details.component.html',
  styleUrls: ['./role-details.component.scss']
})
export class RoleDetailsComponent implements OnInit {
  role: Role[] = [];

  settings = {
    actions:{add:false},

    add: {
      addButtonContent: '',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',

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
      role: {
        title: 'Role',
        type: 'string',
        width: '95%',
      },


    },
  }

  constructor(
              private roleService: RoleService,
              private toastr: NbToastrService,
  ) { }

  ngOnInit(): void {
    this.initialize();
  }

  initialize(){
    this.roleService.getAllRoles().subscribe((roles : Role[]) => {
      this.role = roles;
  })
}

  onEditRowSelect(value){
    this.roleService.updateRole(value.newData)
    .subscribe(data => {
      this.toastr.success('Role modifié avec succées !' , 'Success');
      this.initialize();
    })

  };

  deleteData(value){
    this.roleService.deleteRole(value.data.id)
    .subscribe(data => {
      this.toastr.success('Utilisateur Supprimé avec succées !' , 'Success');
      this.initialize();

  })

  };
}
