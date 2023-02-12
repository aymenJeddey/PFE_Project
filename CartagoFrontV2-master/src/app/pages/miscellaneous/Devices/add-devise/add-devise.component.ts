import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { Calendrie } from '../../../../models/calendrie';
import { Devise } from '../../../../models/devise';
import { CalendrieService } from '../../../../services/referenciel/calendrie.service';
import { DeviseService } from '../../../../services/referenciel/devise.service';

@Component({
  selector: 'ngx-add-devise',
  templateUrl: './add-devise.component.html',
  styleUrls: ['./add-devise.component.scss']
})
export class AddDeviseComponent implements OnInit {
  data1 = JSON.parse(localStorage.getItem('devise'));

  calendar: Calendrie[] = [];
  formDevise!: FormGroup;

  constructor( private formbuilder: FormBuilder,
               private toastrService: NbToastrService,
               private deviseService: DeviseService,
               private calendrieService: CalendrieService,
               private _router: Router


    ) { }

  ngOnInit(): void {
    var data = JSON.parse(localStorage.getItem('calendar'));
    var data1 = JSON.parse(localStorage.getItem('devise'));
    localStorage.removeItem('devise')
    this.formDevise = this.formbuilder.group({
      id: [],
      decimal: [],
      decimalName: [],
      name: [],
      translatedName: [],
      quantity: [],
      certain: [],
      internalName: [],
      calendar: [],
    });


    this.calendrieService.getAllCalendars().subscribe((data)=>{
      this.calendar = data
    })

    this.formDevise.controls['id'].setValue(data1.id),
    this.formDevise.controls['decimal'].setValue(data1.decimal),
    this.formDevise.controls['decimalName'].setValue(data1.decimalName),
    this.formDevise.controls['name'].setValue(data1.name),
    this.formDevise.controls['translatedName'].setValue(data1.translatedName),
    this.formDevise.controls['quantity'].setValue(data1.quantity),
    this.formDevise.controls['certain'].setValue(data1.certain),
    this.formDevise.controls['internalName'].setValue(data1.internalName),
/*     this.formDevise.controls['calendar'].setValue(data1.calendar);
 */



    this.calendrieService.getAllCalendars().subscribe((data)=>{
      this.calendar = data
    })
  }
  onSubmit(value){
    if(this.data1 == null){


      this.deviseService.addCurrency(value).subscribe((devise: Devise) => {
      this.toastrService.success('Calendrier ajouté avec succées' , 'Success');
      this._router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
        this._router.navigate(['/pages/miscellaneous/Devise']);
    });
    })
  }
  else{ this.deviseService.updateCurrency(value).subscribe((devise: Devise) => {
    this.toastrService.success('Calendrier ajouté avec succées' , 'Success');
    this._router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
      this._router.navigate(['/pages/miscellaneous/Devise']);
  })
  })

  }

  }
  onReset(){

  }
}
