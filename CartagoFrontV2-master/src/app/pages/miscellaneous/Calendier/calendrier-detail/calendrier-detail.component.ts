import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { Calendrie} from '../../../../models/calendrie'
import { CalendrieService } from '../../../../services/referenciel/calendrie.service';

@Component({
  selector: 'ngx-calendrier-detail',
  templateUrl: './calendrier-detail.component.html',
  styleUrls: ['./calendrier-detail.component.scss']
})
export class CalendrierDetailComponent implements OnInit {
  calendrier:Calendrie[];
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
      description: {
        title: 'Description',
        type: 'boolean',
        width: '95%',

      },



  },
};
  constructor(private calendarService: CalendrieService,
              private _router : Router ,
              private toastrService: NbToastrService
              ) { }

  ngOnInit(): void {
    this.initialize()
  }

  initialize(){
    this.calendarService.getAllCalendars().subscribe((calenderies )=>{
      this.calendrier = calenderies;
      console.log(calenderies);

    })
  }

  onEditRowSelect(event){
    localStorage.setItem('calendar',JSON.stringify(event.data))

    this._router.navigateByUrl('/pages/miscellaneous/UpdateCalendar')


  }
  deleteData(event){
    this.calendarService.deleteCalendar(event.data.id).subscribe(data => {
      this.toastrService.success('Calendrier Supprimé avec succées !' , 'Success');
      this.initialize();
    })

  }
}
