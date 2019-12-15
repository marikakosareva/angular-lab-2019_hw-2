import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products = [
    { name: "Burgers", list: [
        {name: "Beefburger", price: 0.95, image: "gamburger.png", amount: 0},
        {name: "Cheeseburger", price: 1, image: "chizburger.png", amount: 0},
        {name: "McRoyal", price: 4.10, image: "royal.png", amount: 0},
        {name: "Big Mac", price: 3.25, image: "bigmak.png", amount: 0},
        {name: "Big Tasty", price: 6.20, image: "bigteysti.png", amount: 0}
    ]},
    { name: "Rolls", list: [
      {name: "Beefburger", price: 0.95, image: "gamburger.png", amount: 0},
      {name: "Cheeseburger", price: 1, image: "chizburger.png", amount: 0},
      {name: "McRoyal", price: 4.10, image: "royal.png", amount: 0},
      {name: "Big Mac", price: 3.25, image: "bigmak.png", amount: 0},
      {name: "Big Tasty", price: 6.20, image: "bigteysti.png", amount: 0}
    ]},
    { name: "Desserts", list: [
      {name: "Cheese Cake", price: 2.10, image: "cheesecake.png", amount: 0},
      {name: "Makflurri De Lyuks Caramel-Chocolate", price: 3, image: "makflurricaramel.png", amount: 0},
      {name: "Makflurri De Lyuks Strawberry-Chocolate", price: 2.70, image: "makflurristrawberry.png", amount: 0},
      {name: "Chocolate Muss", price: 1.10, image: "chocolatemuss.png", amount: 0}
    ]},
  ];

  cart = [];
  sum = 0;
  
  constructor() { }
}
