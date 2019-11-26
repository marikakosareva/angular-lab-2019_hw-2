import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  burgers = [
    {name: "Beefburger", price: 0.95, image: "gamburger.png"},
    {name: "Cheeseburger", price: 1, image: "chizburger.png"},
    {name: "McRoyal", price: 4.10, image: "royal.png"},
    {name: "Big Mac", price: 3.25, image: "bigmak.png"},
    {name: "Big Tasty", price: 6.20, image: "bigteysti.png"}
  ];

  constructor() { }

}
