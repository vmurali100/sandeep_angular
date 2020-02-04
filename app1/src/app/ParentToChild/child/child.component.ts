import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"]
})
export class ChildComponent implements OnInit {
  //Somedata variable will receive data from Parentz
  @Input() someData;
  @Input() anotherData;
  @Output() sendData = new EventEmitter();
  @Output() sendAnotherData = new EventEmitter();

  sendDatatoParent() {
    this.sendData.emit("sending from child ");
  }

  sendDatatoParent1() {
    this.sendAnotherData.emit("sending another Data from child");
  }

  constructor() {}

  ngOnInit() {}
}
