import { Component } from '@angular/core';
import { Product } from '../../common/product';
import { ProductService } from '../../services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule,HttpClientModule,RouterModule],
  templateUrl: './product-list-grid.component.html',
  // templateUrl: './product-list-table.component.html',
  // templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {

  products: Product[] = [];
  currentCategoryId: number = 1;
  searchMode: boolean = false;

  constructor(private productService: ProductService,
    private route:ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listProducts();
    });
    
  }

  listProducts() {

    this.searchMode = this.route.snapshot.paramMap.has('keyword');
     console.log('searchMode:', this.searchMode);  

    if(this.searchMode){
      this.handleSearchProducts();
    }else {
      this.handleListProducts();
    }
   
  }

  handleSearchProducts(){

    const theKeyword = this.route.snapshot.paramMap.get('keyword');

    if(theKeyword){
      this.productService.searchProducts(theKeyword).subscribe(
        data => {
          this.products = data;
        console.log('Search results:', this.products);  // Now inside subscribe
        }
      );
    }else {
      this.handleListProducts();
    }
      

  }

    handleListProducts(){
    // Check if 'id' route parameter exists
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

    if (hasCategoryId) {
      const param = this.route.snapshot.paramMap.get('id');
      this.currentCategoryId = param ? +param : 1;  // Fallback just in case
    } else {
      this.currentCategoryId = 1;
    }

    this.productService.getProductList(this.currentCategoryId).subscribe(
      data => {
        this.products = data;
      }
    );

    console.log(this.products);
  }
}
