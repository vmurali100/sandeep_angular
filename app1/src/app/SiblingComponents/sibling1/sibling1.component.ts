import { Component, OnInit } from "@angular/core";
import { CommonService } from "../common.service";

@Component({
  selector: "sibling1",
  templateUrl: "./sibling1.component.html",
  styleUrls: ["./sibling1.component.css"]
})
export class Sibling1Component implements OnInit {
  messageFromSib1 = "I am a Message from Sibling1";
  constructor(private commonService: CommonService) {}

  ngOnInit() {}

  sendData() {
    this.commonService.sendDataToSib2(this.messageFromSib1);
  }
}
