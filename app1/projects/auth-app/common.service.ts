import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CommonService {
  constructor(private _http: HttpClient) {}
  loginUser(obj) {
    return this._http.post("http://localhost:3000/auth/login", obj);
  }

  getAllUsers() {
    // const headers = new HttpHeaders({
    //   Authorization:
    //     "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFsZXhAZW1haWwuY29tIiwicGFzc3dvcmQiOiJhbGV4IiwiaWF0IjoxNTgxNTA1MjE1LCJleHAiOjE1ODE1MDg4MTV9.pgL7o61dC-R7KtuQVIuyQBnpO9kntNufhFh24-TANF8"
    // });

    // let headers = new HttpHeaders({
    //   Authorization:
    //     "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFsZXhAZW1haWwuY29tIiwicGFzc3dvcmQiOiJhbGV4IiwiaWF0IjoxNTgxNTA1MjE1LCJleHAiOjE1ODE1MDg4MTV9.pgL7o61dC-R7KtuQVIuyQBnpO9kntNufhFh24-TANF8"
    // });
    return this._http.get("http://localhost:3000/users");
  }
}
