import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CommonServiceApp3 {
  constructor(private _http: HttpClient) {}

  getUsers() {
    return this._http.get("http://localhost:3000/users");
  }

  updateUsers(user) {
    return this._http.put("http://localhost:3000/users/" + user.id, user);
  }

  createUsers(user) {
    console.log(user);
    return this._http.post("http://localhost:3000/users", user);
  }

  deleteUsers(user) {
    return this._http.delete("http://localhost:3000/users/" + user.id);
  }
}
