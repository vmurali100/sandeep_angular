import { Injectable } from "@angular/core";
import { HttpInterceptor } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class TokenInterceptorService implements HttpInterceptor {
  constructor() {}

  intercept(req, next) {
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFsZXhAZW1haWwuY29tIiwicGFzc3dvcmQiOiJhbGV4IiwiaWF0IjoxNTgxNTA1MjE1LCJleHAiOjE1ODE1MDg4MTV9.pgL7o61dC-R7KtuQVIuyQBnpO9kntNufhFh24-TANF8"
      }
    });

    return next.handle(tokenizedReq);
  }
}
