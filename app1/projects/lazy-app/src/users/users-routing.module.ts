import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UsersComponent } from "./users.component";
import { UserDetailsComponent } from "./user-details/user-details.component";

const appRoutes: Routes = [
  {
    path: "",
    component: UsersComponent,
    children: [{ path: "users-details/:id", component: UserDetailsComponent }]
  }
];
@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
