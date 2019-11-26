import { Component} from '@angular/core';
import {ProductsService} from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'McDonalds';
  burgers = [];

  constructor(private productsService: ProductsService){
    this.burgers = productsService.burgers;
  }

  addProduct(){
    console.log('+');
  }

  removeProduct(){
    console.log('-');
  }

}
