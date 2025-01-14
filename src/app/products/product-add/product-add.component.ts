import {Component, EventEmitter, Output} from '@angular/core';
import {Product} from '../product';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-product-add',
  imports: [
    FormsModule
  ],
  templateUrl: './product-add.component.html',
  standalone: true,
  styleUrl: './product-add.component.css'

})
export class ProductAddComponent {
  @Output() newProductCreated : EventEmitter<Product> = new EventEmitter<Product>();
  addProduct(event: Event): void {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const productName = (form.elements.namedItem('product-name') as HTMLInputElement).value;
    const productPrice = parseFloat((form.elements.namedItem('product-price') as HTMLInputElement).value);

    if(productName && productPrice)
    {
      const newProduct: Product = {
          name: productName,
          price: productPrice
      };

      console.log(`New Product: ${newProduct.name} - ${newProduct.price}`);
      //* Emits an event for the product list component to listen to
      this.newProductCreated.emit(newProduct);
      form.reset();
    }
    else
    {
      alert('Please enter a name and a price for the product.');
    }
  }
}
