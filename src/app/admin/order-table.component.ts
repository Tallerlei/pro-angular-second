import { Component } from "@angular/core";

import { Order } from "../model/order.model";
import { OrderRepository } from "../model/order.repository";

@Component({
  moduleId: module.id,
  templateUrl: "order-table.component.html"
})
export class OrderTableComponent {

  public includeShipped: boolean = false;

  constructor(
    private repository: OrderRepository
  ) { }

  public getOrders(): Order[] {
    return this.repository.getOrders()
      .filter(o => this.includeShipped || !o.shipped);
  }
  public markShipped(order: Order): void {
    order.shipped = true;
    this.repository.updateOrder(order);
  }
  public delete(id: number):void {
    this.repository.deleteOrder(id);
  }
}
