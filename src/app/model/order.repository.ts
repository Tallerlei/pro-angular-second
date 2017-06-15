import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { Order } from "./order.model";

// import { StaticDataSource } from "./static.datasource";
import { RestDataSource } from './rest.datasource';

@Injectable()
export class OrderRepository {
  private orders: Order[] = [];
  private loaded: boolean = false;
  constructor(
    private dataSource: /**StaticDataSource*/ RestDataSource
  ) { }

  public loadOrders(): void {
    this.loaded = true;
    this.dataSource.getOrders()
      .subscribe(orders => this.orders = orders);
  }

  public getOrders(): Order[] {
    if (!this.loaded) {
      this.loadOrders();
    }
    return this.orders;
  }

  public saveOrder(order: Order): Observable<Order> {
    return this.dataSource.saveOrder(order);
  }

  public updateOrder(order: Order): void {
    this.dataSource.updateOrder(order).subscribe(order => {
      this.orders.splice(this.orders.
        findIndex(o => o.id == order.id), 1, order);
    });
  }

  public deleteOrder(id: number): void {
    this.dataSource.deleteOrder(id).subscribe(order => {
      this.orders.splice(this.orders.findIndex(o => id == o.id));
    });
  }
}
