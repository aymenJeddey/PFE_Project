import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { Tier } from '../../../models/tier';
import { ClientService } from '../../../services/referenciel/client.service';

@Component({
  selector: 'ngx-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.scss']


})

export class ClientDetailComponent implements OnInit {
  tier: Tier[]

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
        width: '33%'
      },

      liblon: {
        title: 'Libellé Long',
        type: 'string',
        width: '33%'

     },

     birthday: {
      title: 'Date de naissance',
      type: 'string',
      width: '33%'

    },

   /*  resident: {
      title: 'resident',
      type: 'boolean',

    }, */

  },
};
  constructor( private toastrService: NbToastrService,
    private clientService: ClientService,
    private _router: Router,
    ) { }

  ngOnInit(): void {
    this.initialize();

  }

  initialize(){

    this.clientService.getAllClients().subscribe((client: Tier[]) => {
      this.tier = client;
      console.log(client);

    })

  };


  onEditRowSelect(event) {
    console.log(event);
    localStorage.setItem('Person',JSON.stringify( event.data));
    this._router.navigateByUrl('/pages/miscellaneous/UpdateClient')

  }
  deleteData(event){
    console.log(event);
    console.log('hola');

    this.clientService.deleteClient(event.data.id) .subscribe(data => {
      this.toastrService.success('Particulier Supprimé avec succées !' , 'Success');
      this._router.navigateByUrl('/pages/miscellaneous/Client')
      this.initialize();

  })
  }
}
