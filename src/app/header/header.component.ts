import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';
import {CartService} from "../services/cart.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public categories: any[] = [];
  private categorySubscribe: any;

  constructor(
    private databaseService:DatabaseService,
    public cartService: CartService
  ) {}

  ngOnInit() {
    this.getAllCategories();
  }

  ngOnDestroy() {
    this.categorySubscribe.unsubscribe();
  }

  getAllCategories() {
    this.categorySubscribe = this.databaseService.getCategories().subscribe((categories: any) => {
      this.categories = categories;
    })
  }

}
