import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './componentw/cart/cart.component';
import { Cart } from './componentw/cart/cart.component/cart.component.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    Cart.ComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
