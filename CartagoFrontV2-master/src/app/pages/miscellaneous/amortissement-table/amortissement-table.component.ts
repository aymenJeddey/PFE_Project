import { Component, OnInit } from "@angular/core";
import { NbDialogRef, NbToastrService } from "@nebular/theme";

@Component({
  selector: "ngx-amortissement-table",
  templateUrl: "./amortissement-table.component.html",
  styleUrls: ["./amortissement-table.component.scss"],
})
export class AmortissementTableComponent implements OnInit {
  amortissement: any;
  settings = {
    mode: "external",
    hideSubHeader: true,
    actions: false,
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
      debut: {
        title: "Date valeur",
        type: "string",
      },
      fin: {
        title: "Date écheance",
        type: "string",
      },
      nbJours: {
        title: "Nombre de jours",
        type: "string",
      },
      capitalInvestiValue: {
        title: "Capital Investi",
        type: "string",
      },
      capitalRestantValue: {
        title: "Capital Restant du",
        type: "string",
      },
      amortissement: {
        title: "Amortissement",
        type: "string",
      },
      annuite: {
        title: "Annuite",
        type: "string",
        //valuePrepareFunction: (roles) => {},
      },
    },
  };
  constructor(
    private toastrService: NbToastrService,
    private dialogRef: NbDialogRef<AmortissementTableComponent>
  ) {}

  ngOnInit(): void {
    console.log(this.amortissement);
  }

  printReport(): void {
    this.toastrService.success("Success", "Rapport téléchargé", {
      duration: 3000,
    });
    // window.print();
    let dataType = "application/vnd.ms-excel.sheet.macroEnabled.12";
    let tableSelect = document.getElementById("table-data");
    let tableHtml = tableSelect!.outerHTML.replace(/ /g, "%20");
    let downloadLink = document.createElement("a");
    document.body.appendChild(downloadLink);
    downloadLink.href = "data:" + dataType + ", " + tableHtml;
    downloadLink.download = "report.xls";
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }

  onReset() {
    this.dialogRef.close();
  }
}
