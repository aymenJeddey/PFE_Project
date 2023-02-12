import { ThisReceiver, ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { Agence } from '../../../models/agence';
import { AgenceService } from '../../../services/referenciel/agence.service';

@Component({
  selector: 'ngx-agence',
  templateUrl: './agence.component.html',
  styleUrls: ['./agence.component.scss']
})
export class AgenceComponent implements OnInit {
  agence : Agence[]
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

      libcou: {
        title: 'Libellé Court',
        type: 'string',
      },

      liblon: {
        title: 'Libellé Long',
        type: 'string',

     },

     nbPerson: {
      title: 'Nombre d employés',
      type: 'string',

    },

  },
};
  constructor(private agenceService: AgenceService,
              private _router: Router,
              private toastrService: NbToastrService) { }

  ngOnInit(): void {
    this.initialize()
  }
  initialize(){
    this.agenceService.getAllAgencies().subscribe(agency =>{
      this.agence = agency;
    })
  }
  onEditRowSelect(value){
    localStorage.setItem('agence',JSON.stringify( value.data));
    this._router.navigateByUrl('/pages/miscellaneous/AddAgence')

  }
  deleteData(value){
    this.agenceService.deleteAgency(value.data.id).subscribe(data=> {
      this.toastrService.success('Agence Supprimée avec Succées ')
      this.initialize()
    })

  }
}
