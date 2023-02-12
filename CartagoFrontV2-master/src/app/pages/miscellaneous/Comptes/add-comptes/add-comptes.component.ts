import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SmartTableData } from '../../../../@core/data/smart-table';
import { Agence } from '../../../../models/agence';
import { Devise } from '../../../../models/devise';
import { Tier } from '../../../../models/tier';
import { AccountService } from '../../../../services/referenciel/account.service';
import { AgenceService } from '../../../../services/referenciel/agence.service';
import { BanqueService } from '../../../../services/referenciel/banque.service';
import { ClientService } from '../../../../services/referenciel/client.service';
import { DeviseService } from '../../../../services/referenciel/devise.service';

@Component({
  selector: 'ngx-add-comptes',
  templateUrl: './add-comptes.component.html',
  styleUrls: ['./add-comptes.component.scss']
})
export class AddComptesComponent implements OnInit  {
  registerForm: FormGroup;
  typeClient: string = 'Person';

  tier: Tier[] ;
  bank: Tier[] ;
  devise:Devise[] ;
  agence:Agence[] ;
settings = {
    mode: 'external',
    actions: { delete: false , edit: false,
      custom: [
        {
          name: 'yourAction',
          title: '<i class="nb-checkmark"></i>'
        }],
        position: 'left'
      },


      add: {
        addButtonContent: '',
        createButtonContent: '<i class="nb-checkmark"></i>',
        cancelButtonContent: '<i class="nb-close"></i>',
        confirmCreate:true,
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

     birthday: {
      title: 'Date de naissance',
      type: 'string',

    },

    resident: {
      title: 'resident',
      type: 'boolean',

    },

  },
};
settings1 = {
  mode: 'external',
  actions: { delete: false , edit: false,
    custom: [
      {
        name: 'yourAction',
        title: '<i class="nb-checkmark"></i>'
      }],
      position: 'left'
    },

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
settings2 = {
  mode: 'external',

  actions: { delete: false , edit: false,
    custom: [
      {
        name: 'yourAction',
        title: '<i class="nb-checkmark"></i>'
      }],
      position: 'left'
    },


    add: {
      addButtonContent: '',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate:true,
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

   birthday: {
    title: 'Date de naissance',
    type: 'string',

  },

  resident: {
    title: 'resident',
    type: 'boolean',

  },

},
};
settings3 = {
  mode: 'external',
  actions: { delete: false , edit: false,
    custom: [
      {
        name: 'yourAction',
        title: '<i class="nb-checkmark"></i>'
      }],
      position: 'left'
    },

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


  constructor(private clientService : ClientService,
              private formBuilder: FormBuilder,
              private bankService: BanqueService,
              private deviseService: DeviseService,
              private agenceService: AgenceService,
              private compteService: AccountService,
              private _router: Router
    ) { }

  ngOnInit(): void {
    this.initialize();

    this.registerForm = this.formBuilder.group({
      cloture: ['',Validators.required],
      dateCloture: ['',Validators.required],
      rib: ['',Validators.required],
      description: ['',Validators.required],
      solde: ['',Validators.required],
      numCpt: ['',Validators.required],
      active: ['',Validators.required],
      typeAccount: ['',Validators.required],
      agency: ['', Validators.required],
      currency: ['', Validators.required],
      tier: ['', Validators.required],
      accountStatus: ["PREVIEW"]

    })
  }
  initialize(){

    this.clientService.getAllClients().subscribe((client: Tier[]) => {
       this.tier = client;
      console.log(client);
    })
    this.agenceService.getAllAgencies().subscribe((agence: Agence[]) => {
      this.agence = agence;
     console.log(agence);
   })
   this.deviseService.getAllCurrencies().subscribe((devise: Devise[]) => {
    this.devise = devise;
   console.log(devise);
   })
   this.bankService.getAllBanques().subscribe((bank: Tier[]) => {
    this.bank = bank;
   console.log(bank);
 })



  };

  onSubmit(value){
    this.registerForm.controls['agency'].setValue({
      id: this.localAgenceId,
    });
    this.registerForm.controls['currency'].setValue({
      id: this.localdeviseId,
    });
    this.registerForm.controls['tier'].setValue({
      id: this.localTierId,
    });
    this.compteService.addAccount(this.registerForm.value).subscribe(data =>{
      console.log(this.registerForm.value)

    })
    this._router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
      this._router.navigate(['/pages/miscellaneous/Comptes']);
  });

  }

  onReset(){

  }
  changeTypeClient(event: string) {
    this.typeClient = event;
    console.log(event)
  }
  localTierId!: number;
  onCustomAction(clients){
    console.log(clients.data)
    this.registerForm.controls['tier'].setValue(clients.data.libcou + " " + clients.data.liblon)
    this.localTierId = clients.data.id;

  }
  localAgenceId!: number;
  onCustomAction1(agences){
    console.log(agences.data)
    this.registerForm.controls['agency'].setValue(agences.data.libcou)
    this.localAgenceId = agences.data.id;

  }

  localdeviseId!: number;
  onCustomAction3(devises){
    console.log(devises.data)
    this.registerForm.controls['currency'].setValue(devises.data.name)
    this.localdeviseId = devises.data.id;

  }

}
