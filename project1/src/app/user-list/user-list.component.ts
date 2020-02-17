import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { CommonService } from "../common.service";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"]
})
export class UserListComponent implements OnInit {
  @Input() users;
  @Output() deletedInfo = new EventEmitter();
  @Output() editObj = new EventEmitter();
  constructor(private commonService: CommonService) {}

  ngOnInit() {}

  deleteUser(user) {
    this.commonService.deleteUser(user).subscribe(res => {
      this.deletedInfo.emit();
    });
  }

  editUser(user) {
    console.log(user);
    this.editObj.emit(user);
  }
}
