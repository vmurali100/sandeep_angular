import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Welcome to Angular";
  person = { fname: "Murali", lname: "Krishna" };
  users = ["Ram", "Ravi", "Kiran", "RR"];
  isShow: boolean;
  constructor() {
    console.log("Contructor is called");
  }

  ngOnInit() {
    this.isShow = true;
  }
  convertObjArray() {
    return Object.values(this.person);
  }
}
