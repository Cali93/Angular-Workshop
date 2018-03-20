import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopComponent } from './shop/shop.component';

import { ProjectsComponent } from '@app/shop/projects/projects.component';
import { PreordersComponent } from '@app/shop/preorders/preorders.component';
import { OrdersComponent } from '@app/shop/orders/orders.component';

const routes: Routes = [
  {
    path: '',
    component: ShopComponent,
    children: [
      {
        path: '',
        redirectTo: 'projects',
        pathMatch: 'full'
      },
      {
        path: 'projects',
        component: ProjectsComponent,
        data: {
          title: 'Introduction'
        }
      },
      {
        path: 'preorders',
        component: PreordersComponent,
        data: {
          title: 'Pre-Orders'
        }
      },
      {
        path: 'orders',
        component: OrdersComponent,
        data: {
          title: 'Orders'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule {}
