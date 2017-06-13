import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";

import { ProductRepository } from "./product.repository";
import { OrderRepository } from "./order.repository";

import { StaticDataSource } from "./static.datasource";
import { RestDataSource } from "./rest.datasource";

import { Order } from "./order.model";
import { Cart } from "./cart.model";

@NgModule({
  imports: [HttpModule],
  providers: [ProductRepository, Cart, OrderRepository, Order, { provide: StaticDataSource, useClass: RestDataSource }]
})

export class ModelModule { }
