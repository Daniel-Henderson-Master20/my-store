import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart.component';
import { CheckoutSuccess } from './checkout-success.component';
import { CreateForm } from './create-form.component';
import { HeaderComponent } from './component/header/header.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ProductItemDetail } from './product-item-detail.component';
import { ProductList } from './product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    CheckoutSuccessComponent,
    CreateFormComponent,
    HeaderComponent,
    NavbarComponent,
    ProductItemDetailComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
