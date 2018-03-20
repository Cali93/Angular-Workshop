import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '@app/shared';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop/shop.component';

import { AuthenticatedComponent } from './authenticated/authenticated.component';
import { ProjectsComponent } from './projects/projects.component';
import { PreordersComponent } from './preorders/preorders.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderedComponent } from './ordered/ordered.component';

@NgModule({
  imports: [
    SharedModule,
    ShopRoutingModule
  ],
  declarations: [
    ShopComponent,
    AuthenticatedComponent,
    ProjectsComponent,
    PreordersComponent,
    OrdersComponent,
    OrderedComponent
  ],
  providers: []
})
export class ShopModule {
  constructor() {}
}
