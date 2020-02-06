import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  users = [];
  title = "app2";

  handleSubmit(myForm) {
    // console.log(myForm.value);
    console.log(myForm.value);
    this.users.push(myForm.value);
    myForm.reset();
  }
}
