import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { Exceptional } from '../../../../../models/exceptional';
import { CalendrieService } from '../../../../../services/referenciel/calendrie.service';
import { ExceptionalService } from '../../../../../services/referenciel/exceptional.service';

@Component({
  selector: 'ngx-exceptionnelle',
  templateUrl: './exceptionnelle.component.html',
  styleUrls: ['./exceptionnelle.component.scss']
})
export class ExceptionnelleComponent implements OnInit {
  exceptionnelle:Exceptional[];
  registerForm1: FormGroup;
  data1 = JSON.parse(localStorage.getItem('excep'));

  constructor(private calendarService: CalendrieService,
    private exceptionalService: ExceptionalService,
    private _router: Router,
    private formBuiler : FormBuilder,
    private toastrService: NbToastrService,
    ) { }

  ngOnInit(): void {
    var data = JSON.parse(localStorage.getItem('calendar'));
    var data1 = JSON.parse(localStorage.getItem('excep'));
    localStorage.removeItem('excep')
    console.log(data1);

    this.registerForm1 = this.formBuiler.group({
      id:[],
      date:[],
      description:[],
      calendar:[{id:data.id}]
    })
    this.registerForm1.controls['id'].setValue(data1.id);
    this.registerForm1.controls['date'].setValue(data1.date);
    this.registerForm1.controls['description'].setValue(data1.description);
  }

  onSubmit(value){
      if(this.data1 =!null){
    this.exceptionalService.addExceptional(value).subscribe((excep: Exceptional) => {
      this.toastrService.success('Calendrier ajouté avec succées' , 'Success');
      this._router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
        this._router.navigate(['/pages/miscellaneous/UpdateCalendar']);
        console.log('hello')
    });
    })
  }
  else {
    this.exceptionalService.updateExceptional(value).subscribe((excep: Exceptional) => {
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
