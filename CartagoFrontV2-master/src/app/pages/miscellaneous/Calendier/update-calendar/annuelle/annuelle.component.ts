import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { Annual } from '../../../../../models/annual';
import { AnnualService } from '../../../../../services/referenciel/annual.service';
import { CalendrieService } from '../../../../../services/referenciel/calendrie.service';

@Component({
  selector: 'ngx-annuelle',
  templateUrl: './annuelle.component.html',
  styleUrls: ['./annuelle.component.scss']
})
export class AnnuelleComponent implements OnInit {
  data1 = JSON.parse(localStorage.getItem('annuelle'));

  annuelle: Annual[]
  registerForm: FormGroup
  constructor(private calendarService: CalendrieService,
              private annuelleService: AnnualService,
              private _router: Router,
              private formBuiler : FormBuilder,
              private toastrService: NbToastrService) { }

  ngOnInit(): void {
    var data = JSON.parse(localStorage.getItem('calendar'));
    var data1 = JSON.parse(localStorage.getItem('annuelle'));
    localStorage.removeItem('annuelle')

    console.log(data1)


    this.registerForm = this.formBuiler.group({
      id:[],
      day:[],
      month:[],
      description:[],
      calendar:[{id:data.id}]
    })

  this.registerForm.controls['id'].setValue(data1.id);
  this.registerForm.controls['day'].setValue(data1.day);
  this.registerForm.controls['month'].setValue(data1.month);
  this.registerForm.controls['description'].setValue(data1.description);

}



  onSubmit(value){
    console.log(this.data1)
    if(this.data1 == null){


      this.annuelleService.addAnnual(value).subscribe((annual: Annual) => {
      this.toastrService.success('Calendrier ajouté avec succées' , 'Success');
      this._router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
        this._router.navigate(['/pages/miscellaneous/UpdateCalendar']);
    });
    })
  }
else{ this.annuelleService.updateAnnual(value).subscribe((annual: Annual) => {
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
