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
  basket = [];
  sum = 0;

  constructor(private productsService: ProductsService){
    this.products = productsService.products;
  }

  
  addProduct(indexProduct, indexItem){
    this.products[indexProduct].list[indexItem].amount += 1;
    this.sum = +(this.sum + this.products[indexProduct].list[indexItem].price).toFixed(2);
    this.basket.push(this.products[indexProduct].list[indexItem]);
  }

  removeProduct(indexProduct, indexItem){
    if (this.products[indexProduct].list[indexItem].amount > 0) {
      this.products[indexProduct].list[indexItem].amount -= 1;
      this.sum = +(this.sum - this.products[indexProduct].list[indexItem].price).toFixed(2);
      this.basket.splice(this.basket.indexOf(this.products[indexProduct].list[indexItem]),1);
    }
    
    
  }

  deleteProduct(index) {
    this.sum = +(this.sum + this.basket[index].price).toFixed(2);
    
    this.basket[index].amount = 0;
    this.basket.splice(index, 1);
    
  }

}
