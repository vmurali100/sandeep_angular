import { Component } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { CommonService } from "./common.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(private commonService: CommonService) {}
  allUsers: any = [];
  userForm;
  user;
  subjects: any[];
  isUpdate = false;
  ngOnInit() {
    this.userForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
      address: new FormControl(),
      date: new FormControl(),
      gender: new FormControl(),
      city: new FormControl(),
      state: new FormControl(),
      zip: new FormControl(),
      id: new FormControl()
    });
    // this.user = Object.assign({}, this.userForm.value);

    this.getAllusers();
  }

  addUser() {
    let user = this.userForm.value;
    user.subjects = this.subjects;
    this.commonService.addUser(user).subscribe(res => {
      this.getAllusers();
      this.userForm.reset();
    });
  }

  handleCheckbox(event) {
    if (event.target.checked) {
      this.subjects.push(event.target.value);
    } else {
      this.subjects.map((val, index) => {
        if (event.target.value == val) {
          this.subjects.splice(index, 1);
        }
      });
    }
  }

  getAllusers() {
    this.commonService.getAllUsers().subscribe(res => {
      this.allUsers = res;
      this.commonService.sendUserDetails(this.allUsers);
      this.userForm.reset();
    });
  }

  editUserParent(user) {
    this.isUpdate = true;
    this.userForm.setValue(user);
    // this.userForm.controls.email.value = user.email;
    // console.log(this.userForm.controls.email.value);
  }

  updateUser() {
    this.commonService.updateUser(this.userForm.value).subscribe(res => {
      this.isUpdate = false;
      this.getAllusers();
    });
  }
}
