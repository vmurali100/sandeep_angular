import { Component } from "@angular/core";
import { CommonService } from "projects/auth-app/common.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(private commonService: CommonService) {}
  login(myForm) {
    console.log(myForm.value);
    this.commonService.loginUser(myForm.value).subscribe(res => {
      console.log(res);
      localStorage.setItem("token", JSON.stringify(res));
    });
  }

  getUsers() {
    this.commonService.getAllUsers().subscribe(res => {
      console.log(res);
    });
  }
}
