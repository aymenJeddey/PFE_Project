import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbToastComponent, NbToastrService } from '@nebular/theme';
import { Calendrie } from '../../../../models/calendrie';
import { CalendrieService } from '../../../../services/referenciel/calendrie.service';

@Component({
  selector: 'ngx-add-calendrier',
  templateUrl: './add-calendrier.component.html',
  styleUrls: ['./add-calendrier.component.scss']
})
export class AddCalendrierComponent implements OnInit {
  registerForm : FormGroup
  constructor(private fb :FormBuilder,
              private calendrierService: CalendrieService,
              private toastrService : NbToastrService,
              private _router : Router
              ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      id:[],
      description:['', Validators.required],
    })
  }
  onSubmit(value){
    this.calendrierService.addCalendar(value).subscribe((calendar : Calendrie) =>{
      this.toastrService.success('Calendrier ajouté avec succées' , 'Success');
      this._router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
        this._router.navigate(['/pages/miscellaneous/Calendrier']);
    });
    })
  }
  onReset(){

  }
}
