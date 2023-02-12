import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { Agence } from '../../../../models/agence';
import { Employee } from '../../../../models/employee';
import { AgenceService } from '../../../../services/referenciel/agence.service';
import { EmployeeService } from '../../../../services/referenciel/employee.service';

@Component({
  selector: 'ngx-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  data1 = JSON.parse(localStorage.getItem('employe'));

  agence: Agence[] = [];
  employe: Employee[]
  formEmployee!: FormGroup;

  constructor(private formbuilder: FormBuilder,
    private toastrService: NbToastrService,
    private employeeService: EmployeeService,
    private agenceService: AgenceService,
    private _router: Router) { }

  ngOnInit(): void {
    var data = JSON.parse(localStorage.getItem('agence'));

    var data1 = JSON.parse(localStorage.getItem('employe'));
    localStorage.removeItem('employe')
    this.formEmployee = this.formbuilder.group({
      id: [],
      firstName: ['', Validators.required],
      lastName: [],
      agency: [],
    });

    this.agenceService.getAllAgencies().subscribe((data)=>{
      this.agence = data
    })

    this.formEmployee.controls['id'].setValue(this.data1.id);
    this.formEmployee.controls['firstName'].setValue(this.data1.firstName);
    this.formEmployee.controls['lastName'].setValue(this.data1.lastName);
    this.formEmployee.controls['agency'].setValue(this.data1.agency.id);

    this.agenceService.getAllAgencies().subscribe((data)=>{
      this.agence = data
    })
  }
  onSubmit(){
    if(this.data1 == null){
      if(this.formEmployee.value.agency ){
        this.formEmployee.controls['agency'].setValue({
         id: this.formEmployee.value.agency,
       });

      }
      this.employeeService.addEmployee(this.formEmployee.value).subscribe((employee: Employee) => {
      this.toastrService.success('Employé ajouté avec succées' , 'Success');
      this._router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
        this._router.navigate(['/pages/miscellaneous/Employe']);
    });
    })
  }
  else{ this.employeeService.updateEmployee(this.formEmployee.value).subscribe((employee: Employee) => {
    this.toastrService.success('Employé ajouté avec succées' , 'Success');
    this._router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
      this._router.navigate(['/pages/miscellaneous/Employe']);
  })
  })

  }

  }
  onReset(){

  }
}
