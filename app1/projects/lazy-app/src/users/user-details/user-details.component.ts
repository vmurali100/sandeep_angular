import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-user-details",
  templateUrl: "./user-details.component.html",
  styleUrls: ["./user-details.component.css"]
})
export class UserDetailsComponent implements OnInit {
  users: any;
  selectedUser: any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.users = JSON.parse(localStorage.getItem("users"));
    console.log(this.route.snapshot.params.id);
    this.route.paramMap.subscribe(res => {
      this.selectedUser = this.users[res["params"].id];
    });
  }

  convertArray(obj) {
    return Object.values(obj);
  }
}
