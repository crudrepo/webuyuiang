import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoryComponent } from './category/category.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { OrderComponent } from './order/order.component';
import { ProductlistComponent } from './productlist/productlist.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'category',
        component: CategoryComponent
      },
      {
        path: 'product',
        component: ProductComponent
      },
      {
        path: 'productlist',
        component: ProductlistComponent
      },
      {
        path: 'order',
        component: OrderComponent
      }
    ]
  }
  /*{
    path: 'category',
    component: CategoryComponent
  },
  {
    path: 'product',
    component: ProductComponent
  },
  {
    path: 'order',
    component: OrderComponent
  }*/
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
