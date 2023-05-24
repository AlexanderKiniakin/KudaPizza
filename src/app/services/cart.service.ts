import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public basket: any[] = [];
  public grandTotal: number = 0;

  constructor() {
    const cartLocalStorage = localStorage.getItem('cart');
    if (!cartLocalStorage) {
      localStorage.setItem('cart', '[]');
    } else {
      this.basket = JSON.parse(cartLocalStorage);
      this.calcGrandTotal();
    }
  }

  addToCart(product: any) {
    let searchProduct = this.basket.find(item => item.id === product.id);
    if (!searchProduct) {
      product.count = 1;
      product.total_price = product.price;
      this.basket.push(product);
    } else {
      this.basket.reduce((acc, item) => {
        if (item.id === searchProduct.id) {
          item.count++;
          item.total_price += searchProduct.price;
          acc.push(item)
        } else {
          acc.push(item)
        }
        return acc;
      }, []);
    }
    this.calcGrandTotal();
  }

  getItems() {
    return this.basket;
  }

  minusCountCart(ind: any, item: any) {
    this.basket.reduce((acc, product) => {
      if (product.id === item.id) {
        if (product.count <= 1) {
          this.basket.splice(ind, 1)
        }
        product.count--;
        product.total_price -= item.price;
        acc.push(product)
      } else {
        acc.push(product)
      }
      return acc;
    }, []);
    this.calcGrandTotal()
  }

  plusCountCart(item: any) {
    this.basket.reduce((acc, product) => {
      if (product.id === item.id) {
        product.count++;
        product.total_price += item.price;
        acc.push(product)
      } else {
        acc.push(product)
      }
      return acc;
    }, []);
    this.calcGrandTotal()
  }

  calcGrandTotal() {
    this.grandTotal = this.basket.reduce((acc, item)=> {
      return acc + (item.count * item.price);
    }, 0);
    localStorage.setItem('cart', JSON.stringify(this.basket));
  }

}