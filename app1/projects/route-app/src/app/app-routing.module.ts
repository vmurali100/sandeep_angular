import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { PricingComponent } from "./pricing/pricing.component";
import { FeaturesComponent } from "./features/features.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { ProductDetails2Component } from "./product-details2/product-details2.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { CanActivate } from "@angular/router";
import { UserService } from "./user.service";
import { LoginComponent } from "./login/login.component";
const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full" },
  { path: "pricing", component: PricingComponent, canActivate: [UserService] },
  {
    path: "features",
    component: FeaturesComponent,
    children: [
      { path: "product1", component: ProductDetailsComponent },
      { path: "product2", component: ProductDetails2Component }
    ]
  },
  { path: "login", component: LoginComponent },
  { path: "**", component: PageNotFoundComponent }
];
class AlwaysAuthGuard implements CanActivate {
  canActivate() {
    console.log("AlwaysAuthGuard");
    return true;
  }
}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AlwaysAuthGuard]
})
export class AppRoutingModule {}
