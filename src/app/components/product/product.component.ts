import { Component } from '@angular/core';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  constructor(private productService: ProductService) {}

  get filteredProducts() {
    return this.productService.getFilteredProducts();
  }

  onSearchChange(event: Event) {
    const query = event.target as HTMLInputElement;
    this.productService.updateSearchQuery(query.value);
  }
}
