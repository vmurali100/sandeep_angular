import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private _http: HttpClient) {}

  getAllUsers() {
    return this._http.get("https://jsonplaceholder.typicode.com/users");
  }
}
