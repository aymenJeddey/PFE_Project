import { Component, OnInit } from "@angular/core";
import { NbDialogRef, NbToastrService } from "@nebular/theme";
import { Devise } from "../../../../models/devise";
import { DeviseService } from "../../../../services/referenciel/devise.service";

@Component({
  selector: "ngx-devise-select",
  templateUrl: "./devise-select.component.html",
  styleUrls: ["./devise-select.component.scss"],
})
export class DeviseSelectComponent implements OnInit {
  devise: Devise[];
  settings = {
    mode: "external",
    hideSubHeader: false,
    actions: {
      custom: [
        {
          name: "onSearch",
          title: '<i class="nb-checkmark" title="YourAction"></i>',
        },
      ],
      edit: false,
      delete: false,
    },
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      name: {
        title: "Nom",
        type: "string",
      },
    },
  };
  constructor(
    private toastrService: NbToastrService,
    protected ref: NbDialogRef<DeviseSelectComponent>,
    private deviseService: DeviseService
  ) {}

  ngOnInit(): void {
    this.initialize();
  }

  initialize() {
    this.deviseService.getAllCurrenciesFromEngagement().subscribe((data) => {
      this.devise = data;
    });
  }
  onDeviseSelect(event) {
    localStorage.setItem("devise", JSON.stringify(event.data));
    this.ref.close();
  }
}
