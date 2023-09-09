import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';
import { CustomPreloadingService } from './custom-preloading.service';

const routes: Routes = [
  {path : 'orders', component : OrdersComponent},
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) },
  { path: 'products', data: {preload : true}, loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    // preloadingStrategy : PreloadAllModules {for preloading all modules}
    preloadingStrategy : CustomPreloadingService
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
