import { CartItem } from '../cart-item';
import { CartSevice } from './../cart-sevice';
import { Component, inject, signal } from '@angular/core';


@Component({
  imports: [],
  selector: 'app-cart',
  styleUrl: './cart.scss',
  templateUrl: './cart.html',
})
export class Cart {
protected cartService=inject(CartSevice);

}
