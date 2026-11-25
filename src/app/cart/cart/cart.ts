import { CartSevice } from './../cart-sevice';
import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  imports: [CurrencyPipe],
  selector: 'app-cart',
  styleUrl: './cart.scss',
  templateUrl: './cart.html',
})
export class Cart {
protected cartService=inject(CartSevice);

}
