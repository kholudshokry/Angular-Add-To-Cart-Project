import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  proarr:any;
  constructor() { }

  ngOnInit(): void {
  
  if(localStorage.getItem("productsData") != null){
    this.proarr=JSON.parse(localStorage.getItem("productsData"));
  }

}
}
