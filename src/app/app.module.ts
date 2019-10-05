import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { DateRangeDirective } from "./directive/date-range.directive";
import { FormDirective } from "./directive/focusInvalidinput.directive";

import { AppRoutingModule } from "./app-routing.module";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent, DateRangeDirective, FormDirective],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
