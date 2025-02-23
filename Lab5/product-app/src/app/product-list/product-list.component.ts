import { Component, inject} from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { CommonModule } from '@angular/common';
import { Product } from '../product-protocol';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, ProductComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  productList: Product[] = [];
  productService : ProductService = inject(ProductService);
  filteredList : Product[] = [];
  constructor() {
    this.productService.getAllProducts().then((productList : Product[]) => {
      this.productList = productList;
      this.filteredList = productList;
    });
  }

  filterProducts(text : string) {
    if (!text) this.filteredList = this.productList;
    this.filteredList = this.productList.filter(product => product?.FormFactor.toLowerCase().includes(text.toLowerCase()));
    
  }
}
