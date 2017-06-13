import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { ModelModule } from "../model/model.module";

import { CounterDirective } from "./counter.directive";
import { StoreComponent } from "./store.component";
import { CartSummaryComponent } from "./cart-summary.component";
import { CartDetailComponent } from "./cart-detail.component";
import { CheckoutComponent } from "./checkout.component";
@NgModule({
  imports: [ModelModule, BrowserModule, FormsModule, RouterModule],
  declarations: [StoreComponent, CounterDirective, CartSummaryComponent, CartDetailComponent, CheckoutComponent],
  exports: [StoreComponent, CartDetailComponent, CheckoutComponent]
})
export class StoreModule { }
