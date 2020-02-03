import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { Sandeep } from "./sandeep.component";
import { Sandeep2 } from "./sandeep2.component";
import { Sandeep3Component } from "./sandeep3/sandeep3.component";
import { Sandeep4Component } from "./sandeep4/sandeep4.component";

@NgModule({
  declarations: [
    AppComponent,
    Sandeep,
    Sandeep2,
    Sandeep3Component,
    Sandeep4Component
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
