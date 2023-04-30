import { Injectable } from '@angular/core';
import { ProductComponent } from '../product/product.component';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(
    public productComponent: ProductComponent
  ) {}

  items = [];

  addToCart() {
    window.alert('Your product has been added to the cart!')
    return this.items.push();
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

}
