import { NgModule } from "@angular/core";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { ProductDetails2Component } from "./product-details2/product-details2.component";
import { ProductRouterModule } from "./product-routing.module";
import { FeaturesComponent } from "./features/features.component";

@NgModule({
  declarations: [
    FeaturesComponent,
    ProductDetailsComponent,
    ProductDetails2Component
  ],
  imports: [ProductRouterModule],
  exports: [ProductDetailsComponent, ProductDetails2Component]
})
export class ProductModule {}
