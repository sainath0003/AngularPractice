import { computed, Service, signal } from '@angular/core';
import { Product } from '../products/product';
import { CartItem } from './cart-item';

@Service()
export class CartSevice {

  private cartItems= signal<CartItem[]>([]);

  readonly toatlItems = computed(() => this.cartItems().reduce((count, item) => count + item.quantity, 0));

  addToCart(product: Product): void {
    console.log('Adding product to cart:', product);
    this.cartItems.update((items) => {
      const existingItem = items.some((item) => item.product.id === product.id);
      if (existingItem) {
        return items.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...items, { product, quantity: 1 }];
      }
    });
  }

  removeFromCart(productId: number): void {
    this.cartItems.update(items => items.filter(item => item.product.id !== productId));
  }

  getCartItems(): CartItem[] {
    return this.cartItems();
  }

  getCartTotal(): number {
    return this.cartItems().reduce((total, item) => total + item.product.price * item.quantity, 0);
  }
}
