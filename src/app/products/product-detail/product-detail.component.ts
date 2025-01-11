import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { UpperCasePipe, CurrencyPipe } from '@angular/common'
import {Product} from '../product';

@Component({
  selector: 'app-product-detail',
  imports: [
    UpperCasePipe, CurrencyPipe
  ],
  templateUrl: './product-detail.component.html',
  standalone: true,
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  @Input() product: Product | undefined;
  //* input decorator allows us to pass data from a parent component into a child component
  //* decorators are special declarations attached to class declarations
  //* The pipe operator allows us to specify that a variable can be of multiple types
  @Output() bought: EventEmitter<void> = new EventEmitter<void>();
  //* EventEmitter class allows us to emit events
  //* We use type void as we aren't passing any data
  ngOnChanges(changes: SimpleChanges): void {
    //* Check what has changed
    const product = changes['product'];

    if (product.firstChange === false)
    {
      const oldValue = product.previousValue;
      const newValue = product.currentValue;
      console.log(`Product changed from ${oldValue} to ${newValue}`);
    }
  }

  buy(): void {
    this.bought.emit();
  }
}
