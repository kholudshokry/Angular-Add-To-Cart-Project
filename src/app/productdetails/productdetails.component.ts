import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  index;
  SelectedProduct:any ={};

  constructor( Active : ActivatedRoute , Data:  DataService ) {
    this.index = Active.snapshot.paramMap.get("id");
    Data.getProductslist().subscribe((data)=>{
      this.SelectedProduct = data[this.index]
      console.log(this.SelectedProduct);
    });
   }

  ngOnInit(): void {
  }
  

}
