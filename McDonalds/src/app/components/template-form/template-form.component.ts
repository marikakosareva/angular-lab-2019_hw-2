import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {

  deliveryType: string = 'delivery';
  offices = ['Chyornaya rechka', 'Ozerki', 'Petrogradskaya'];
  userData = {name: "", email: "", address: ""};

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log("Form have been sent!");
    console.log(this.userData);
    alert("Order have been sent!");
    window.location.href="/menu";
  }

}
