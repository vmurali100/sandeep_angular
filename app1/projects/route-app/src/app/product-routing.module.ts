import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { ProductDetails2Component } from "./product-details2/product-details2.component";
import { FeaturesComponent } from "./features/features.component";

const appRoutes: Routes = [
  { path: "", component: FeaturesComponent },
  { path: "product1", component: ProductDetailsComponent },
  { path: "product2", component: ProductDetails2Component }
];
@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class ProductRouterModule {}
