import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
  {path : 'orders', component : OrdersComponent},
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) },
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy : PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
