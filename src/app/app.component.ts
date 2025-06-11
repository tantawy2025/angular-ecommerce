import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ProductListComponent } from "./components/product-list/product-list.component";
import { ProductCategoryMenuComponent } from './components/product-category-menu/product-category-menu.component';
import { SearchComponent } from './components/search/search.component';
import { CartStatusComponent } from './components/cart-status/cart-status.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { LoginStatusComponent } from './components/login-status/login-status.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule,CommonModule,ProductCategoryMenuComponent,SearchComponent,CartStatusComponent,LoginStatusComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-ecommerce';
}
