import { Component } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { ProductAddComponent } from '../product-add/product-add.component';

import { Product } from '../product';
import { SortPipe } from '../../sort.pipe'

@Component({
  selector: 'app-product-list',
  imports: [
    ProductDetailComponent,
    SortPipe,
    ProductAddComponent
  ],
  templateUrl: './product-list.component.html',
  standalone: true,
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: Product[] = [
    { name: 'Webcam', price: 90 },
    { name: 'Microphone', price: 65},
    { name: 'Wireless Keyboard', price: 35}
  ];

  selectedProduct: Product | undefined;

  changeActive(event: Event, productName: Product): void {
    this.selectedProduct = productName;

    const buttons = document
      .querySelectorAll<HTMLButtonElement>('#products > button');

    for(const button of buttons)
    {
      button.classList.remove('active');
    }

    const clickedButton = event.target as HTMLButtonElement;
    clickedButton.classList.add('active');
  }

  onBuy(): void {
    alert(`You just bought a ${this.selectedProduct!.name}!`);
  }
  onNewProductAdded(newProduct: Product) : void {
    this.products.push(newProduct);
  }
}
