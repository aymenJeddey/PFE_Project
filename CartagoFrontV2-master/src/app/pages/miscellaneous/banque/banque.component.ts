import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { Tier } from '../../../models/tier';
import { BanqueService } from '../../../services/referenciel/banque.service';

@Component({
  selector: 'ngx-banque',
  templateUrl: './banque.component.html',
  styleUrls: ['./banque.component.scss']
})
export class BanqueComponent implements OnInit {
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
      },

      liblon: {
        title: 'Libellé Long',
        type: 'string',

     },

     bqloc: {
      title: 'Bqloc',
      type: 'string',

    },

    agcent: {
      title: 'Agcent',
      type: 'string',

    },

    codbct: {
      title: 'Codbct',
      type: 'string',

    },

    reference: {
      title: 'Reference',
      type: 'string',

    },

  },
};
  constructor(private toastrService: NbToastrService,
    private bankService: BanqueService,
    private _router: Router,) { }

  ngOnInit(): void {
    this.initialize()
  }
  initialize(){

    this.bankService.getAllBanques().subscribe((bank: Tier[]) => {
      this.tier = bank;
      console.log(bank);

    })

  };


  onEditRowSelect(event) {
    console.log(event);
    localStorage.setItem('bank',JSON.stringify( event.data));
    this._router.navigateByUrl('/pages/miscellaneous/UpdateBank')

  }
  deleteData(event){
    console.log(event);
    console.log('hola');

    this.bankService.deleteBanque(event.data.id) .subscribe(data => {
      this.toastrService.success('Particulier Supprimé avec succées !' , 'Success');
      this._router.navigateByUrl('/pages/miscellaneous/Bank')
      this.initialize();

  })
  }
}
