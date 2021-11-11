import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './componentw/cart/cart.component';
import { Cart } from './componentw/cart/cart.component/cart.component.component';
import { CheckoutSuccess } from './component/checkout-success/checkout-success.component/checkout-success.component.component';
import { CreateForm } from './component/create-form/create-form.component/create-form.component.component';
import { Header } from './component/header/header.component/header.component.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    Cart.ComponentComponent,
    CheckoutSuccess.ComponentComponent,
    CreateForm.ComponentComponent,
    Header.ComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
