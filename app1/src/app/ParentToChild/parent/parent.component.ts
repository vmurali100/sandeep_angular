import { Component, OnInit } from "@angular/core";

@Component({
  selector: "parent",
  templateUrl: "./parent.component.html",
  styleUrls: ["./parent.component.css"]
})
export class ParentComponent implements OnInit {
  msgfrom;
  msgfrom1;

  msgFromParent = "Hello I am from Parent Component";
  msgFromParent1 = "Hello I am from Parent1 Component";

  Recevied(event) {
    this.msgfrom = event;
  }

  Recevied1(event) {
    this.msgfrom1 = event;
  }

  constructor() {}

  ngOnInit() {}
}
