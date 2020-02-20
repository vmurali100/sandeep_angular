import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CommonService {
  sendUsersInfo = new Subject();
  constructor(private _http: HttpClient) {}
  getAllUsers() {
    return this._http.get(
      "http://www.filltext.com/?rows=30&fname={firstName}&lname={lastName}&tel={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}&pretty=true"
    );
  }
  addUser(user) {
    return this._http.post("http://localhost:3000/users", user);
  }
  updateUser(user) {
    return this._http.put("http://localhost:3000/users/" + user.id, user);
  }
  deleteUser(user) {
    return this._http.delete("http://localhost:3000/users/" + user.id);
  }
  sendUserDetails(data) {
    this.sendUsersInfo.next(data);
  }
}
