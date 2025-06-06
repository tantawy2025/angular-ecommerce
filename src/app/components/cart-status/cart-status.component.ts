import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart-status',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './cart-status.component.html',
  styleUrl: './cart-status.component.scss'
})
export class CartStatusComponent implements OnInit {

  totalPrice: number = 0.00;
  totalQuantity: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.updateCartStatus();
  }

  updateCartStatus() {

    // subscribe to the cart totalPrice
    this.cartService.totalPrice.subscribe(
      data => this.totalPrice = data
    );

    // subscribe to the cart totalQuantity
    this.cartService.totalQuantity.subscribe(
      data => this.totalQuantity = data
    );
  }

}
