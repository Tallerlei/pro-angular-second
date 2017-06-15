import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";

import { ProductRepository } from "./product.repository";
import { OrderRepository } from "./order.repository";
import { AuthService } from './auth.service';

import { StaticDataSource } from "./static.datasource";
import { RestDataSource } from "./rest.datasource";

import { Order } from "./order.model";
import { Cart } from "./cart.model";

@NgModule({
  imports: [HttpModule],
  providers: [
    ProductRepository,
    Cart,
    OrderRepository,
    Order,
    { provide: StaticDataSource, useClass: RestDataSource },
  AuthService,
  RestDataSource
]
})

export class ModelModule { }
