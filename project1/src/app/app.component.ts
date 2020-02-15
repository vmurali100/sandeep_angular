import { Component } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "project1";
  userForm;
  user;
  subjects: any[];
  ngOnInit() {
    this.userForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
      address: new FormControl(),
      date: new FormControl(),
      gender: new FormControl(),
      city: new FormControl(),
      state: new FormControl(),
      zip: new FormControl()
    });
    // this.user = Object.assign({}, this.userForm.value);
    this.subjects = [];
  }

  addUser() {
    let user = this.userForm.value;
    user.subjects = this.subjects;
    console.log(user);
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
    // console.log(event.target.checked);
    // console.log(event.target.value);
    console.log(this.user);
  }
}
