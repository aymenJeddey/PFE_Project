import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { Agence } from '../../../../models/agence';
import { AgenceService } from '../../../../services/referenciel/agence.service';

@Component({
  selector: 'ngx-add-agence',
  templateUrl: './add-agence.component.html',
  styleUrls: ['./add-agence.component.scss']
})
export class AddAgenceComponent implements OnInit {
   data1 = JSON.parse(localStorage.getItem('agence'));
   agence: Agence[] = [];

  formAgence!: FormGroup;
  constructor( private formbuilder: FormBuilder,
               private agenceService: AgenceService,
               private toastrService: NbToastrService,
               private _router: Router) { }

  ngOnInit(): void {
    var data1 = JSON.parse(localStorage.getItem('agence'));
    localStorage.removeItem('agence')


    this.formAgence = this.formbuilder.group({
      id: [],
      libcou: ['', Validators.required],
      liblon: [],
      nbPerson: [],
    });

    this.formAgence.controls['id'].setValue(this.data1.id);
    this.formAgence.controls['libcou'].setValue(this.data1.libcou);
    this.formAgence.controls['liblon'].setValue(this.data1.liblon);
    this.formAgence.controls['nbPerson'].setValue(this.data1.nbPerson);
  }

  onSubmit(value){
    if(this.data1 == null){


      this.agenceService.addAgency(value).subscribe((agency: Agence) => {
      this.toastrService.success('Calendrier ajouté avec succées' , 'Success');
      this._router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
        this._router.navigate(['/pages/miscellaneous/Agence']);
    });
    })
  }
  else{ this.agenceService.updateAgency(value).subscribe((agency: Agence) => {
    this.toastrService.success('Calendrier ajouté avec succées' , 'Success');
    this._router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
      this._router.navigate(['/pages/miscellaneous/Agence']);
  })
  })

  }

  }
  onReset(){

  }
}
