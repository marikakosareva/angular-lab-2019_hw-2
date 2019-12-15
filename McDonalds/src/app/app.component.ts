import { Component} from '@angular/core';
import {ProductsService} from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'McDonalds';
  products = [];

  constructor(private productsService: ProductsService){
    this.products = productsService.products;
  }

  addProduct(indexProduct, indexItem){
    this.products[indexProduct].list[indexItem].amount += 1;
    this.productsService.sum = +(this.productsService.sum + this.products[indexProduct].list[indexItem].price).toFixed(2);
    this.productsService.basket.push(this.products[indexProduct].list[indexItem]);
  }

  removeProduct(indexProduct, indexItem){
    if (this.products[indexProduct].list[indexItem].amount > 0) {
      this.products[indexProduct].list[indexItem].amount -= 1;
      this.productsService.sum = +(this.productsService.sum - this.products[indexProduct].list[indexItem].price).toFixed(2);
      this.productsService.basket.splice(this.productsService.basket.indexOf(this.products[indexProduct].list[indexItem]),1);
    }
  }

  deleteProduct(index: number) {
    this.productsService.sum = +(this.productsService.sum + this.productsService.basket[index].price).toFixed(2);   
    this.productsService.basket[index].amount = 0;
    this.productsService.basket.splice(index, 1); 
  }
}
