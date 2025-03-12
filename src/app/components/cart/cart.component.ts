import { Component } from '@angular/core';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  constructor(public cartService: CartService) {}

  addProduct() {
    const product = { id: Date.now(), name: 'Sample Product', price: 50 };
    this.cartService.addToCart(product);
  }

  removeProduct(productId: number) {
    this.cartService.removeFromCart(productId);
  }

  get cart() {
    return this.cartService.getCart();
  }

  get totalPrice() {
    return this.cartService.getTotalPrice();
  }
}
