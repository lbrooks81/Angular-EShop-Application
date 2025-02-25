import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './products/product';

@Pipe({
  standalone: true,
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Product[]): Product[] {
    if(value) {
      return value.sort((a: Product, b: Product) => {
          if (a.name < b.name) {
            return -1;
          } else if (a.name > b.name) {
            return 1;
          } else {
            return 0;
          }
        }
      );
    }
    return [];
  }

}
