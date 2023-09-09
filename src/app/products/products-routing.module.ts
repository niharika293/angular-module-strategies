import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { CampainProductsComponent } from './campain-products/campain-products.component';
import { ProductsResolverResolver } from './products-resolver.resolver';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  {path : 'campaign-details', component : CampainProductsComponent, resolve : {
    products : ProductsResolverResolver
  }}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
