import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  products = [];
  basket = [];

  constructor(private productsService: ProductsService) {
    this.products = productsService.products;
    this.basket = productsService.basket; 
   }
  
  ngOnInit() {
  }

   addProduct(indexProduct, indexItem){
    this.products[indexProduct].list[indexItem].amount += 1;
    this.productsService.sum = +(this.productsService.sum + this.products[indexProduct].list[indexItem].price).toFixed(2);
    this.basket.push(this.products[indexProduct].list[indexItem]);
  }

  removeProduct(indexProduct, indexItem){
    if (this.products[indexProduct].list[indexItem].amount > 0) {
      this.products[indexProduct].list[indexItem].amount -= 1;
      this.productsService.sum = +(this.productsService.sum - this.products[indexProduct].list[indexItem].price).toFixed(2);
      this.basket.splice(this.basket.indexOf(this.products[indexProduct].list[indexItem]),1);
    }
    
    
  }

}
