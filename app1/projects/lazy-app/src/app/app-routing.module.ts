import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "../home/home.component";
import { FeaturesComponent } from "../features/features.component";
import { ProdutsComponent } from "../produts/produts.component";
import { PageNotFoundComponent } from "../page-not-found/page-not-found.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "features", component: FeaturesComponent },
  { path: "products", component: ProdutsComponent },
  { path: "users", loadChildren: "../users/users.module#UsersModule" },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
