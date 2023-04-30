import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  public cartArray: any;

  constructor(
    public cartService: CartService,
  ){}

  findCart() {
    this.cartArray = this.cartService.items;
    console.log(this.cartArray)
  }
  

}
