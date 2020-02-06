import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-reactive-form",
  templateUrl: "./reactive-form.component.html",
  styleUrls: ["./reactive-form.component.css"]
})
export class ReactiveFormComponent implements OnInit {
  userForm: FormGroup;
  users = [];
  constructor() {}

  ngOnInit() {
    this.userForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl()
    });
  }
  handleForm() {
    console.log(this.userForm.value);
    console.log(this.userForm.valid);
    this.users.push(this.userForm.value);
    this.userForm.reset();
  }
}
