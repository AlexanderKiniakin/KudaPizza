import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  public sortTime: string = "Время";
  public sortTimeList: boolean = false;
  public sortDate: string = "Дата";
  public sortDateList: boolean = false;

  constructor(
    public cartService: CartService,
  ){}

  sortTimeCall(time?: string): void {
    if (time) {
      this.sortTime = time;
      this.sortTimeList = !this.sortTimeList;
    }
    this.sortTimeList = !this.sortTimeList;
  }

  sortDateCall(date?: string): void {
    if (date) {
      this.sortDate = date;
      this.sortDateList = !this.sortDateList;
    }
    this.sortDateList = !this.sortDateList;
  }

}
