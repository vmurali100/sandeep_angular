import { Component, OnInit } from "@angular/core";
import { CommonService } from "../common.service";

@Component({
  selector: "sibling2",
  templateUrl: "./sibling2.component.html",
  styleUrls: ["./sibling2.component.css"]
})
export class Sibling2Component implements OnInit {
  messageFromSib1;
  constructor(private commonSerice: CommonService) {}

  ngOnInit() {
    this.commonSerice.receiveAndSend.subscribe(res => {
      console.log(res);
      this.messageFromSib1 = res;
    });
  }
}
