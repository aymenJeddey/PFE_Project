import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Devise } from '../../../../models/devise';
import { DeviseService } from '../../../../services/referenciel/devise.service';

@Component({
  selector: 'ngx-devises-details',
  templateUrl: './devises-details.component.html',
  styleUrls: ['./devises-details.component.scss']
})
export class DevisesDetailsComponent implements OnInit {
  devise: Devise[]
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
      name: {
        title: 'Nom',
        type: 'string',
        },

        translatedName: {
          title: 'Nom traduit',
          type: 'string',

        },

      decimal: {
        title: 'Decimal',
        type: 'string',
      },

      decimalName: {
        title: 'Nom des decimales',
        type: 'string',

     },

    quantity: {
      title: 'Quantité',
      type: 'boolean',

    },
    internalName: {
      title: 'Code interne',
      type: 'string',

    },


  },
};
  constructor(private deviseService: DeviseService,
              private _router: Router) { }

  ngOnInit(): void {
    this.initialize()
  }
  initialize(){
    this.deviseService.getAllCurrencies().subscribe((device: Devise[])=>{
      this.devise = device
    })

  }
  onEditRowSelect(event){
    localStorage.setItem('devise',JSON.stringify( event.data));
    this._router.navigateByUrl('/pages/miscellaneous/AddDevise')
  }

  deleteData(event){

  }
}
