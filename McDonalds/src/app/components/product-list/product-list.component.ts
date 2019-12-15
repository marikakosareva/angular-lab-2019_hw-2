import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input() products: any;
  @Output() addItemEvent = new EventEmitter<{indexProduct: number, indexItem: number}>();
  @Output() removeItemEvent = new EventEmitter<{indexProduct: number, indexItem: number}>();

  constructor() { }

  ngOnInit() {
  }

  addItem(indexProduct: number, indexItem: number){
    this.addItemEvent.emit({indexProduct: indexProduct, indexItem: indexItem});
  }

  removeItem(indexProduct: number, indexItem: number){
    this.removeItemEvent.emit({indexProduct: indexProduct, indexItem: indexItem});
  }
}
