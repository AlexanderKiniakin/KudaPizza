import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  public items: any;

  constructor(
    private cartService: CartService,
  ){
    this.items = this.cartService.getItems();
  }

}
