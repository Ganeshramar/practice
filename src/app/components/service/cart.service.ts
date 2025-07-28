import { Injectable, signal, computed } from '@angular/core';

interface Product {
  id: number;
  name: string;
  price: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart = signal<Product[]>([]);

  addToCart(product: Product) {
    this.cart.update((currentCart) => [...currentCart, product]);
  }

  removeFromCart(productId: number) {
    this.cart.update((currentCart) =>
      currentCart.filter((product) => product.id !== productId),
    );
  }

  totalPrice = computed(() =>
    this.cart().reduce((acc, curr) => acc + curr.price, 0),
  );

  getCart() {
    return this.cart;
  }

  getTotalPrice() {
    return this.totalPrice;
  }
}
