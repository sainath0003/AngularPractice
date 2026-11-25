import { Routes } from '@angular/router';
import { ProductsGrid } from './products/products-grid/products-grid';
import { Cart } from './cart/cart/cart';

export const routes: Routes = [
  { path: '', component: ProductsGrid },
  { path: 'cart', component: Cart }
];
