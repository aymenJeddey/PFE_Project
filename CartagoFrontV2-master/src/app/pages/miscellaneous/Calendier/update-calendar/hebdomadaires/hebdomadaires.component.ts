import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { Weekly } from '../../../../../models/weekly';
import { WeeklyService } from '../../../../../services/referenciel/weekly.service';

@Component({
  selector: 'ngx-hebdomadaires',
  templateUrl: './hebdomadaires.component.html',
  styleUrls: ['./hebdomadaires.component.scss']
})
export class HebdomadairesComponent implements OnInit {
  registerForm: FormGroup;
  hebdo: Weekly[]
  data1 = JSON.parse(localStorage.getItem('hebdo'));

  constructor( private hebdoService: WeeklyService,
                private _router: Router,
                private formBuiler : FormBuilder,
                private toastrService: NbToastrService,) { }

  ngOnInit(): void {
    var data = JSON.parse(localStorage.getItem('calendar'));
    var data1 = JSON.parse(localStorage.getItem('hebdo'));
     localStorage.removeItem('hebdo')
     this.registerForm = this.formBuiler.group({
      id:[],
      day:[],
      calendar:[{id:data.id}]
    })
    this.registerForm.controls['id'].setValue(data1.id);
    this.registerForm.controls['day'].setValue(data1.day);
  }

  onSubmit(value){
    if(this.data1 =!null){
      this.hebdoService.addWeekly(value).subscribe((hebdo: Weekly) => {
        this.toastrService.success('Calendrier ajouté avec succées' , 'Success');
        this._router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
          this._router.navigate(['/pages/miscellaneous/UpdateCalendar']);
          console.log('hello')
      });
      })
    }
    else {
      this.hebdoService.updateWeekly(value).subscribe((hebdo: Weekly) => {
        this.toastrService.success('Calendrier ajouté avec succées' , 'Success');
        this._router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
          this._router.navigate(['/pages/miscellaneous/UpdateCalendar']);
    })
  })

  }
}
  onReset(){

  }
}
