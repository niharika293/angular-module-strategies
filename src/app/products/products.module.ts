import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { CampainProductsComponent } from './campain-products/campain-products.component';


@NgModule({
  declarations: [
    ProductsComponent,
    CampainProductsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { constructor(){
  console.log("products module loaded!");
} }
