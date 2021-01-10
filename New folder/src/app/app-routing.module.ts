import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductdetailsComponent } from 'New folder/src/app/productdetails/productdetails.component';
import { ProductlistComponent } from 'New folder/src/app/productlist/productlist.component';


const routes: Routes = [
  {path:"details/:id" , component : ProductdetailsComponent} ,
  {path:"home" , component : ProductlistComponent} ,
  {path:"" , redirectTo:"home",pathMatch:"full"} ,
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
