import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CommonService {
  receiveAndSend = new Subject();
  constructor() {}

  sendDataToSib2(message) {
    this.receiveAndSend.next(message);
  }
}
