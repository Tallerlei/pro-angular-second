import { Component } from "@angular/core";
import { Router } from "@angular/router";


import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";
import { Cart } from "../model/cart.model";
@Component({
  selector: "store",
  moduleId: module.id,
  templateUrl: "store.component.html"
})
export class StoreComponent {
  public selectedCategory: string = null;
  public productsPerPage: number = 4;
  public selectedPage: number = 1;
  constructor(
    private repository: ProductRepository,
    private cart: Cart,
    private router: Router
  ) { }

  get products(): Product[] {
    let pageIndex = (this.selectedPage - 1) * this.productsPerPage;
    return this.repository.getProducts(this.selectedCategory)
      .slice(pageIndex, pageIndex + this.productsPerPage);
  }

  get categories(): string[] {
    return this.repository.getCategories();
  }

  get pageCount(): number {
    return Math.ceil(this.repository
      .getProducts(this.selectedCategory).length / this.productsPerPage)
  }

  public changeCategory(newCategory?: string): void {
    this.selectedCategory = newCategory;
  }

  public changePage(newPage: number): void {
    this.selectedPage = newPage;
  }

  public changePageSize(newSize: number): void {
    this.productsPerPage = Number(newSize);
    this.changePage(1);
  }
  public addProductToCart(product: Product): void {
    this.cart.addLine(product);
    this.router.navigateByUrl("/cart");
  }
}
