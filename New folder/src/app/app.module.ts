import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbPaginationModule, NgbAlertModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { SubmitorderComponent } from './submitorder/submitorder.component';
import { CartdropdownComponent } from './cartdropdown/cartdropdown.component';
import { CartdetailsComponent } from './cartdetails/cartdetails.component';
import {HttpClientModule} from '@angular/common/http';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ProductlistComponent,
    ProductdetailsComponent,
    SubmitorderComponent,
    CartdropdownComponent,
    CartdetailsComponent,
    CartComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbPaginationModule, 
    NgbAlertModule, 
    NgbModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
