import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { Employee } from '../../../models/employee';
import { EmployeeService } from '../../../services/referenciel/employee.service';

@Component({
  selector: 'ngx-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  employe: Employee[]
  settings = {
    mode: 'external',
    actions:{add:false},

    add: {
      addButtonContent: '',
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

      firstName: {

        title: 'Prénom',
        type: 'string',
      },

      lastName: {
        title: 'Nom',
        type: 'string',

  },
  agency: {
    title: 'Agence',
    type: 'string',
  },
}
  };

  constructor(private employeService: EmployeeService,
              private _router: Router,
              private toastrService: NbToastrService) { }

  ngOnInit(): void {
    this.initialize()

  }
  initialize(){
    this.employeService.getAllEmployees().subscribe(employee =>{
      this.employe = employee;
    })
  }
  onEditRowSelect(value){
    localStorage.setItem('employe',JSON.stringify( value.data));
    this._router.navigateByUrl('/pages/miscellaneous/AddEmploye')

  }
  deleteData(value){
    this.employeService.deleteEmployee(value.data.id).subscribe(data=> {
      this.toastrService.success('Employe Supprimée avec Succées ')
      this.initialize()
    })

  }
}
