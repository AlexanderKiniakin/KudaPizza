import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

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
    this.route.url.subscribe((url)=> { 
      const header: any = document.querySelector('app-header');
      const footer: any = document.querySelector('app-footer'); 
        header.style.display = 'none';
        footer.style.display = 'none';
    }); 
  }

  ngOnDestroy() {
    this.categorySubscribe.unsubscribe();
    this.productsSubscribe.unsubscribe();
    const header: any = document.querySelector('app-header');
    const footer: any = document.querySelector('app-footer'); 
    header.style.display = 'block';
    footer.style.display = 'block'; 
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

