import { Component, OnInit, ViewChild } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UserListComponent } from "../user-list/user-list.component";

@Component({
  selector: "app-reactive-form",
  templateUrl: "./reactive-form.component.html",
  styleUrls: ["./reactive-form.component.css"]
})
export class ReactiveFormComponent implements OnInit {
  userForm: FormGroup;
  users = [];
  @ViewChild(UserListComponent, { static: true }) userlist;
  // 1st LifeCycle Triggers
  constructor() {
    console.log("constructor called");
    console.log(this.userlist);
  }

  ngOnInit() {
    console.log("ngOnInit Triggered");
    this.userForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl()
    });
    console.log("dirty: -", this.userForm.controls.email.dirty);
    console.log(this.userlist);
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit is Called");
    console.log(this.userlist);
  }

  handleForm() {
    console.log(this.userForm.value);
    console.log(this.userForm.valid);
    this.users.push(this.userForm.value);
    this.userForm.reset();
    this.users.push(this.userForm.value);
  }

  sayHello() {
    this.userlist.sayHello();
  }

  validate() {
    // console.log("valid: -", this.userForm.controls.email.valid);
    // console.log("invalid: -", this.userForm.controls.email.invalid);
    // console.log("touched: -", this.userForm.controls.email.touched);
    // console.log("pristine: -", this.userForm.controls.email.pristine);
    // console.log("dirty: -", this.userForm.controls.email.dirty);
  }
}
