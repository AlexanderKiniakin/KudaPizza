import { Component } from '@angular/core';
import { AppComponent } from "../app.component";
import { ProductService } from "../services/product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {


  constructor(
    public productService: ProductService,
    private appComponent: AppComponent
    ) {}

    addToCartProduct(product: any) {
    }

  closeModal() {
    this.appComponent.modalView = false;
  }

}
