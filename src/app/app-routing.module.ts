import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from 'New folder/src/app/cart/cart.component';
import { ProductdetailsComponent } from 'New folder/src/app/productdetails/productdetails.component';
import { ProductlistComponent } from 'New folder/src/app/productlist/productlist.component';


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
