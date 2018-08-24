import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { OrderComponent } from './order/order.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminService } from './admin.service';
import { ProductlistComponent } from './productlist/productlist.component';
AdminService

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [LoginComponent, CategoryComponent, ProductComponent, OrderComponent, DashboardComponent, ProductlistComponent],
  providers:[AdminService]
})
export class AdminModule { }
