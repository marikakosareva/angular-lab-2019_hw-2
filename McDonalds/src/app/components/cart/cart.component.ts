import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  products = [];
  basket = [];

  constructor(private productsService: ProductsService) {
    this.products = productsService.products;
    this.basket = productsService.basket; 
   }

  ngOnInit() {
  }

  deleteProduct(index) {
    this.productsService.sum = +(this.productsService.sum - this.productsService.basket[index].price).toFixed(2);
    
    this.productsService.basket[index].amount = 0;
    this.productsService.basket.splice(index, 1);
    
  }

}


