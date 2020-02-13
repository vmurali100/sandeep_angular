import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PricingComponent } from "./pricing/pricing.component";
import { FeaturesComponent } from "./features/features.component";
import { HomeComponent } from "./home/home.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { ProductDetails2Component } from "./product-details2/product-details2.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { UserService } from "./user.service";
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    PricingComponent,
    FeaturesComponent,
    HomeComponent,
    ProductDetailsComponent,
    ProductDetails2Component,
    PageNotFoundComponent,
    LoginComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
