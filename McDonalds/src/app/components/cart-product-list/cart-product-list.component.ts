import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart-product-list',
  templateUrl: './cart-product-list.component.html',
  styleUrls: ['./cart-product-list.component.scss']
})
export class CartProductListComponent implements OnInit {

  @Input() basket: any;
  @Output() deleteItemEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  deleteItem(index: number){
    this.deleteItemEvent.emit(index);
  }
}
