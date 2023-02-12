import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { GroupService } from '../../../../services/referenciel/group.service';

@Component({
  selector: 'ngx-group-add',
  templateUrl: './group-add.component.html',
  styleUrls: ['./group-add.component.scss']
})
export class GroupAddComponent implements OnInit {

  registerForm: FormGroup;
  _router : Router
  constructor(private formBuilder: FormBuilder,
    private groupService: GroupService,
    private toastrService: NbToastrService,
   ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      groupName: new FormControl( '', Validators.required),

  })
  }
  onSubmit(value) {

    console.log(value);
    this.groupService.addGroup(value).subscribe(data =>{
      this.toastrService.success('Group Client ajouté avec succées !' , 'Success');
    },
    error => {
      console.log(error);
    });
        console.log(value);
    this._router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
      this._router.navigate(['/pages/miscellaneous/Group']);
  });

}

onReset() {
  this.registerForm.reset();

}
}
