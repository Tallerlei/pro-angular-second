import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { NgForm } from "@angular/forms";

import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";

@Component({
  moduleId: module.id,
  templateUrl: "product-editor.component.html"
})

export class ProductEditorComponent {
  editing: boolean = false;
  product: Product = new Product();

  constructor(
    private repository: ProductRepository,
    private router: Router,
    activeRoute: ActivatedRoute
  ) {
    this.editing = activeRoute.snapshot.params["mode"] == "edit";
    if (this.editing) {
      // in edit mode prefill product from repository data
      Object.assign(this.product, repository.getProduct(activeRoute.snapshot.params["id"]));
    }
  }

  public save(form: NgForm): void {
    this.repository.saveProduct(this.product);
    this.router.navigateByUrl("/admin/main/products");
  }
}
