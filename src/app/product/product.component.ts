import { Component, OnInit } from '@angular/core';
import { AppComponent } from "../app.component";
import { ProductService } from "../services/product.service";
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{

  private bodyDom: any = document.querySelector("body")

  constructor(
    public productService: ProductService,
    public cartService: CartService,
    private appComponent: AppComponent
    ) {}

  ngOnInit() {
    this.bodyDom.style.overflow = "hidden";
  }

  ngOnDestroy() {
    this.bodyDom.style.overflow = "visible";
  }

  pushToCart(pushProduct: any) {
    this.cartService.addToCart(pushProduct);
    this.appComponent.popoverTitle = pushProduct.name;
    this.appComponent.popoverView = true;
    setTimeout(() => {
      const popover: any = document.querySelector('.popover__content');
      popover.style.opacity = 0;
      popover.style.visibility = 'hidden';
    }, 2000);
    setTimeout(() => {
      this.appComponent.popoverView = false;
    }, 2300);
  }

  closeModal() {
    this.appComponent.modalView = false;
  }

}
