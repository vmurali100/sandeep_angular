import { Component } from "@angular/core";
import { CommonServiceApp3 } from "projects/app3/common.serviceApp3";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  userForm;
  user = {
    fname: "",
    lname: "",
    email: ""
  };
  index;
  users: any = [];
  constructor(private commonservice: CommonServiceApp3) {}
  title = "app3";
  ngOnInit() {
    this.userForm = new FormGroup({
      fname: new FormControl(),
      lname: new FormControl(),
      email: new FormControl()
    });

    this.getUsersFromServer();
  }

  addUser() {
    console.log(this.userForm.value);
    this.commonservice.createUsers(this.userForm.value).subscribe(res => {
      console.log("User Added Successfully");
      this.getUsersFromServer();
    });
  }

  getUsersFromServer() {
    this.commonservice.getUsers().subscribe(res => {
      console.log(res);
      this.users = res;
    });
  }

  deleteUser(userObj) {
    this.commonservice.deleteUsers(userObj).subscribe(res => {
      this.getUsersFromServer();
    });
  }
  editUser(userObj) {
    this.index = userObj.id;
    this.user = Object.assign({}, userObj);
  }

  updateUser() {
    console.log(this.user);
    this.user["id"] = this.index;
    this.commonservice.updateUsers(this.user).subscribe(red => {
      this.getUsersFromServer();
    });
  }
}
