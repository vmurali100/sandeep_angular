import {
  Component,
  OnInit,
  OnChanges,
  SimpleChange,
  Input
} from "@angular/core";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"]
})
export class UserListComponent implements OnChanges {
  @Input() users;
  @Input() somevalue;
  constructor() {}

  ngOnInit() {}

  sayHello() {
    console.log("Say hello Getting Called from parent");
  }

  ngOnChanges(changes: any) {
    console.log("ngOnChanges called");
  }

  ngDoCheck() {
    console.log("ngDoCheck() is triggered");
  }
  ngAfterContentInit() {
    console.log("ngAfterContentInit() is triggered");
  }
  ngAfterContentChecked() {
    console.log("ngAfterContentChecked is Called");
  }
  ngAfterViewChecked() {
    console.log("ngAfterViewChecked called");
  }
  ngOnDestroy() {
    console.log("Just before Removed");
  }
}
