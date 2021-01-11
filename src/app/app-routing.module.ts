import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ProductlistComponent } from './productlist/productlist.component';



const routes: Routes = [
  {path:"details/:id" , component : ProductdetailsComponent} ,
  {path:"home" , component : ProductlistComponent} ,
  {path:"" , redirectTo:"home",pathMatch:"full"} ,
  {path:"cart" , component : CartComponent} ,
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
