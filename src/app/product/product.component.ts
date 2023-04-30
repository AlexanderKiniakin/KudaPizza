import { Component } from '@angular/core';
import { AppComponent } from "../app.component";
import { ProductService } from "../services/product.service";
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {


  constructor(
    public productService: ProductService,
    public cartService: CartService,
    private appComponent: AppComponent
    ) {}

    pushToCart(pushProduct: object) {
      this.cartService.addToCart(pushProduct);
    }

  closeModal() {
    this.appComponent.modalView = false;
  }

}
