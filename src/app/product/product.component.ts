import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  public product: any;
  private productsSubscribe: any;
  private productSubscribe: any;


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
    this.productsSubscribe.unsubscribe();
    const header: any = document.querySelector('app-header');
    const footer: any = document.querySelector('app-footer'); 
    header.style.display = 'block';
    footer.style.display = 'block'; 
  }

  getRouteParams() {
    return this.route.queryParams.subscribe((params: any) => {
      if (params.product) {
        this.getProduct(params.product)

      } 
    })
  }

  getProduct(id: string) {
    this.productSubscribe = this.databaseService.getProduct(id).subscribe((product: any) => this.product = product)
  }

  findProduct(products: any[]) {
    console.log(products);
  }

}
