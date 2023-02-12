import { DatePipe } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { NbToastrService } from "@nebular/theme";
import { Annual } from "../../../../models/annual";
import { Exceptional } from "../../../../models/exceptional";
import { Weekly } from "../../../../models/weekly";
import { AnnualService } from "../../../../services/referenciel/annual.service";
import { CalendrieService } from "../../../../services/referenciel/calendrie.service";
import { ExceptionalService } from "../../../../services/referenciel/exceptional.service";
import { WeeklyService } from "../../../../services/referenciel/weekly.service";

@Component({
  selector: "ngx-update-calendar",
  templateUrl: "./update-calendar.component.html",
  styleUrls: ["./update-calendar.component.scss"],
})
export class UpdateCalendarComponent implements OnInit {
  registerForm: FormGroup;
  annuelle: Annual[];
  exceptionnelle: Exceptional[];
  hebdomadaire: Weekly[];
  settings = {
    mode: "external",
    actions: { add: false },

    add: {
      addButtonContent: "",
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },

    columns: {
      day: {
        title: "Jour",
        type: "number",
        width: "30%",
      },
      month: {
        title: "Mois",
        type: "number",
        width: "30%",
      },

      description: {
        title: "Description",
        type: "string",
        width: "35%",
      },
    },
  };
  settings1 = {
    mode: "external",
    actions: { add: false },

    add: {
      addButtonContent: "",
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },

    columns: {
      date: {
        title: "date",
        type: "date",
        width: "40%",
        valuePrepareFunction: (date) => {
          return this.datePipe.transform(new Date(date), "dd MMM yyyy");
        },
      },
      description: {
        title: "Description",
        type: "number",
        width: "40%",
      },
    },
    /* valuePrepareFunction: (Date) => {
  	console.log('created: ', Date);
    var raw = new Date(Date);

    var formatted = this.datePipe.transform(raw, 'dd MMM yyyy');
    console.log('formatted: ', formatted);
    return formatted;
  } */
  };
  settings2 = {
    mode: "external",
    actions: { add: false },

    add: {
      addButtonContent: "",
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },

    columns: {
      day: {
        title: "Jour",
        type: "string",
        width: "90%",
      },
    },
  };
  constructor(
    private formBuiler: FormBuilder,
    private annuelleService: AnnualService,
    private hebdoService: WeeklyService,
    private excepService: ExceptionalService,
    private _router: Router,
    private calendarService: CalendrieService,
    private datePipe: DatePipe,
    private toastrService: NbToastrService
  ) {}

  ngOnInit(): void {
    var data = JSON.parse(localStorage.getItem("calendar"));

    this.registerForm = this.formBuiler.group({
      id: [],
      description: ["", Validators.required],
    });
    this.registerForm.controls["description"].setValue(data.description);
    this.initialize();
  }

  initialize() {
    var data = JSON.parse(localStorage.getItem("calendar"));
    this.calendarService.getAnnualsByCalendarId(data.id).subscribe((data) => {
      this.annuelle = data;
    });
    this.calendarService
      .getExceptionalsByCalendarId(data.id)
      .subscribe((data1) => {
        this.exceptionnelle = data1;
      });
    this.calendarService.getWeeklysByCalendarId(data.id).subscribe((data2) => {
      this.hebdomadaire = data2;
    });
  }

  onSubmit(value) {
    this._router.navigateByUrl("/pages/miscellaneous/Calendrier");
  }
  open() {
    this._router.navigateByUrl("/pages/miscellaneous/Calendrier");
  }

  onReset() {}
  onEditRowSelect(event) {
    localStorage.setItem("annuelle", JSON.stringify(event.data));
    this._router.navigateByUrl("/pages/miscellaneous/AddAnnual");
  }
  onEditRowSelect1(event) {
    localStorage.setItem("excep", JSON.stringify(event.data));
    this._router.navigateByUrl("/pages/miscellaneous/AddExceptional");
  }
  onEditRowSelect2(event) {
    localStorage.setItem("hebdo", JSON.stringify(event.data));
    this._router.navigateByUrl("/pages/miscellaneous/AddHebdo");
  }
  deleteData(value) {
    this.annuelleService.deleteAnnual(value.data.id).subscribe((data) => {
      this.toastrService.success("Annuelle Supprimé avec succées !", "Success");
      this.initialize();
    });
  }

  deleteData1(value) {
    this.excepService.deleteExceptional(value.data.id).subscribe((data) => {
      this.toastrService.success(
        "Exceptionnelle Supprimé avec succées !",
        "Success"
      );
      this.initialize();
    });
  }
  deleteData2(value) {
    this.hebdoService.deleteWeekly(value.data.id).subscribe((data) => {
      this.toastrService.success(
        "Hebdomadaire Supprimé avec succées !",
        "Success"
      );
      this.initialize();
    });
  }
}
