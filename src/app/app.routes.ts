import { Routes } from '@angular/router';
import {ProductListComponent} from './products/product-list/product-list.component';

export const routes: Routes = [
  { path: 'list', redirectTo: '', pathMatch: 'full'}, //* If the user types in "list" in full, it will redirect to the home page
  { path: '', component: ProductListComponent} //* When the path is empty, display the product list component
];
