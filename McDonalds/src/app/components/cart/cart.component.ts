import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  products = [];
  cart = [];

  constructor(private productsService: ProductsService) {
    this.products = productsService.products;
    this.cart = productsService.cart; 
  }

  ngOnInit() {
  }

  deleteProduct(index: number) {
    this.productsService.sum = +(this.productsService.sum - this.productsService.cart[index].price).toFixed(2);
    this.productsService.cart[index].amount = 0;
    this.productsService.cart.splice(index, 1); 
  }
}


