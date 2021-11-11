import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './component/cart/cart.component';
import { Cart } from './component/cart/cart.component';
import { CheckoutSuccess } from './component/checkout-success/checkout-success.component/checkout-success.component.component';
import { CreateForm } from './component/create-form/create-form.component/create-form.component.component';
import { Header } from './component/header/header.component/';
import { Navbar } from './component/navbar/navbar.component';
import { ProductItemDetail } from './component/product-item-detail/product-item-detail.component';
import { ProductList } from './component/product-list/product-list.component';
import { ProductList } from './component/product-list/product-list.compenent';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    CartComponent,
    CheckoutSuccess.Component,
    CreateForm.Component,
    Header.Component,
    Navbar.Component,
    ProductItemDetail.Component,
    ProductList.Component,
    ProductList.Compenent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
