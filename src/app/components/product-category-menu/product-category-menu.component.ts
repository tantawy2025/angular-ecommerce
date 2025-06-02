import { Component, OnInit } from '@angular/core';
import { ProductCategory } from '../../common/product-category';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-product-category-menu',
  standalone: true,
  imports: [CommonModule,RouterModule,HttpClientModule],
  templateUrl: './product-category-menu.component.html',
  styleUrl: './product-category-menu.component.scss'
})
export class ProductCategoryMenuComponent implements OnInit {

  
  productCategories: ProductCategory[] = [];
  
  constructor(private productService: ProductService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.listProductCategories();
  }

  listProductCategories() {

    this.productService.getProductCategories().subscribe({
    next: data => {
      console.log('Product Categories =', data);
      this.productCategories = data;
    },
    error: err => {
      console.error('Error loading categories', err);
    }
  });
  }


}
