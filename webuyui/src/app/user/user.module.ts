import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserserviceService } from './userservice.service';
import { SignupComponent } from './signup/signup.component';
import { LogoutComponent } from './logout/logout.component';
import { ProductlistComponent } from './productlist/productlist.component';
@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [LoginComponent, ProductsComponent, CartComponent, CheckoutComponent, ViewproductComponent, SignupComponent, LogoutComponent, ProductlistComponent],
  providers: [UserserviceService]
})
export class UserModule { }
