import { CommonModule } from "@angular/common";

import { NgModule } from "@angular/core";
import { UserRoutingModule } from "./users-routing.module";
import { UsersComponent } from "./users.component";
import { UserDetailsComponent } from "./user-details/user-details.component";

@NgModule({
  declarations: [UsersComponent, UserDetailsComponent],
  imports: [CommonModule, UserRoutingModule],
  exports: [UsersComponent, UserDetailsComponent]
})
export class UsersModule {}
