import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  public items: any[] = [];
  public newitems: any[] = [];
  public grandTotal: any;

  constructor(
    private cartService: CartService,
  ){
    this.items = this.cartService.getItems();
    this.calcGrandTotal(this.items);
  }

  minusCountCart(ind: any, item: any) {
    if (item.count <= 1) {
      this.items.splice(ind, 1)
      this.calcGrandTotal(this.cartService.items)

    } else if (item.count > 1) { 

      this.cartService.items.splice(ind, 1);
      item.count--;
      this.cartService.items.push(item);
      this.calcGrandTotal(this.cartService.items)

    }
  }

  plusCountCart(ind: any, item: any) {
    this.cartService.items.splice(ind, 1);
    item.count++;
    this.cartService.items.push(item);
    this.calcGrandTotal(this.cartService.items)
  }

  calcGrandTotal(items: any[]) {
    this.grandTotal = this.items.reduce((acc, item)=> {
      return acc + (item.count * item.price);
    }, 0);
  }
  
}
