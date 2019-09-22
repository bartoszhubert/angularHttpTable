import { Component } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { map } from "rxjs/operators";
import { NgForm } from "@angular/forms";

import { Raport, Raports } from "./model/raport.model";
import { RaportService } from "./service/raport.service";
import { headerTable } from "./service/constans.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  headers: string[];
  localsSelect$: Observable<string[]>;
  raport: Raport = {
    dateFrom: "",
    dateTo: "",
    place: ""
  };
  raports$: Subject<Array<Raports>> = new BehaviorSubject<Array<Raports>>([]);
  showTable: boolean = false;

  constructor(public raportService: RaportService) {}

  ngOnInit() {
    this.showHeaderTable();
    this.showLocalsSelect();
  }

  onSubmit(form: NgForm) {
    if (!form.invalid) {
      this.showRaports(form);
      this.showTable = true;
    }
  }

  showHeaderTable() {
    this.headers = headerTable;
  }

  showLocalsSelect() {
    this.localsSelect$ = this.raportService.getLocals();
  }

  showRaports(form) {
    this.raportService
      .getRaports()
      .pipe(map(data => data.filter(data => data.local === this.raport.place)))
      .subscribe(
        data => {
          this.raports$.next(data);
          form.resetForm();
        },
        err => console.error("Failed to load resource due to error", err)
      );
  }
}
