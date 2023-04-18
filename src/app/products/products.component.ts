import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {

  public category: any;
  private categorySubscribe: any;
  private productsSubscribe: any;
  public products: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private databaseService: DatabaseService
    ) {}

  ngOnInit() {
    this.getRouteParams();
  }

  ngOnDestroy() {
    this.categorySubscribe.unsubscribe();
    this.productsSubscribe.unsubscribe();
  }

  getRouteParams() {
    return this.route.queryParams.subscribe((params: any) => {
      if (params.category) {
        this.categorySubscribe = this.databaseService
      .getCategory(params.category)
      .subscribe((category: any) => {
        this.category = category;
        this.getProducts();
      });
      } else {
        this.getProducts();
      }
      
    })
  }

  getProducts() {
    this.productsSubscribe = this.databaseService.getProducts().subscribe(async (products: any) => {
      this.category?.id ? this.findCategory(products) : this.products = products;
    })
  }

  findCategory(products: any[]) {
    this.products = products.reduce((acc, item) => {
      
      if (item.category === this.category.id) {
        acc.push(item);
      }
      return acc;
    }, []);
  }

}
