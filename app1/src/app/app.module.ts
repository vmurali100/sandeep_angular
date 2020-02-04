import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { Sandeep } from "./sandeep.component";
import { Sandeep2 } from "./sandeep2.component";
import { Sandeep3Component } from "./sandeep3/sandeep3.component";
import { Sandeep4Component } from "./sandeep4/sandeep4.component";
import { ParentComponent } from './ParentToChild/parent/parent.component';
import { ChildComponent } from './ParentToChild/child/child.component';
import { Sibling1Component } from './SiblingComponents/sibling1/sibling1.component';
import { Sibling2Component } from './SiblingComponents/sibling2/sibling2.component';

@NgModule({
  declarations: [
    AppComponent,
    Sandeep,
    Sandeep2,
    Sandeep3Component,
    Sandeep4Component,
    ParentComponent,
    ChildComponent,
    Sibling1Component,
    Sibling2Component
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
