import { Component, inject } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { CartSevice } from '../cart/cart-sevice';
import { MatBadgeModule } from '@angular/material/badge';
import { RouterLink } from '@angular/router';


@Component({
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, MatBadgeModule, RouterLink],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class Header {

  protected cartService = inject(CartSevice);
}
