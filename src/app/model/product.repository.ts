import { Injectable } from "@angular/core";

import { Product } from "./product.model";
// import { StaticDataSource } from "./static.datasource";
import { RestDataSource } from "./rest.datasource";

@Injectable()
export class ProductRepository {
  private products: Product[] = [];
  private categories: string[] = [];

  constructor(
    private dataSource: /**StaticDataSource*/ RestDataSource
  ) {
    dataSource.getProducts().subscribe(data => {
      this.products = data;
      this.categories = data.map(product => product.category)
        .filter((c, index, array) => array.indexOf(c) == index).sort();
    });
  }

  getProducts(category: string = null): Product[] {
    return this.products
      .filter(product => category == null || category == product.category);
  }

  getProduct(id: number): Product {
    return this.products.find(product => product.id == id);
  }

  getCategories(): string[] {
    return this.categories;
  }

  public saveProduct(product: Product): void {
    if (product.id == null || product.id == 0) {
      this.dataSource.saveProduct(product)
        .subscribe(p => this.products.push(p));
    } else {
      this.dataSource.updateProduct(product)
        .subscribe(p => {
          this.products.splice(this.products.
            findIndex(p => p.id == product.id), 1, product);
        });
    }
  }
  public deleteProduct(id: number): void {
    this.dataSource.deleteProduct(id).subscribe(p => {
      this.products.splice(this.products.
        findIndex(p => p.id == id), 1);
    })
  }
}
