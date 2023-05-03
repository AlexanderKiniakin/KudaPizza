import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  public items: any[] = [];

  constructor() { }

  addToCart(product: any) {
    product.count = 1;
    this.items.push(product)
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

}
