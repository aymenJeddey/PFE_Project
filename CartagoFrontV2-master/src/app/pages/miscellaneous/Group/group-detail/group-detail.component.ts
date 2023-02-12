import { Component, OnInit } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { Group } from '../../../../models/group';
import { GroupService } from '../../../../services/referenciel/group.service';

@Component({
  selector: 'ngx-group-detail',
  templateUrl: './group-detail.component.html',
  styleUrls: ['./group-detail.component.scss']
})
export class GroupDetailComponent implements OnInit {

  group: Group[] = [];

  settings1 = {
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
      groupName: {
        title: 'Groupe',
        type: 'string',
        width: '95%',
      },


    },
  }
  constructor(
    private groupService: GroupService,
    private toastr: NbToastrService,
) { }

ngOnInit(): void {
  this.initialize();
}

initialize(){
  this.groupService.getAllGroups().subscribe((groups : Group[]) => {
    this.group = groups;
})
}

onEditRowSelect(value){
  this.groupService.updateGroup(value.newData)
  .subscribe(data => {
    this.toastr.success('Role modifié avec succées !' , 'Success');
    this.initialize();
  })

};

deleteData(value){
  this.groupService.deleteGroup(value.data.id)
  .subscribe(data => {
    this.toastr.success('Utilisateur Supprimé avec succées !' , 'Success');
    this.initialize();

})

};
}
