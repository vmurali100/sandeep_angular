import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class UserService implements CanActivate {
  constructor(private route: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    console.log("UserService called");
    let token = localStorage.getItem("token");
    if (token) {
      return false;
    } else {
      this.route.navigate(["/login"]);
    }
  }
}
