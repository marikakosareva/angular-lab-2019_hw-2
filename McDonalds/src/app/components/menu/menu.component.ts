import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  products = [];
  cart = [];

  constructor(private productsService: ProductsService) {
    this.products = productsService.products;
    this.cart = productsService.cart; 
  }
  
  ngOnInit() {
  }

  addProduct(event: any){
    this.products[event.indexProduct].list[event.indexItem].amount += 1;
    this.productsService.sum = +(this.productsService.sum + this.products[event.indexProduct].list[event.indexItem].price).toFixed(2);
    this.cart.push(this.products[event.indexProduct].list[event.indexItem]);
  }

  removeProduct(event: any){
    if (this.products[event.indexProduct].list[event.indexItem].amount > 0) {
      this.products[event.indexProduct].list[event.indexItem].amount -= 1;
      this.productsService.sum = +(this.productsService.sum - this.products[event.indexProduct].list[event.indexItem].price).toFixed(2);
      this.cart.splice(this.cart.indexOf(this.products[event.indexProduct].list[event.indexItem]),1);
    }
  }
}
