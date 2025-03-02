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
  removedList : Product[] = [];

  constructor() {
    this.productService.getAllProducts().then((productList : Product[]) => {
      this.productList = productList;
      this.filteredList = productList;
      this.removedList = productList;
    });
  }

  filterProducts(text : string) {
    if (!text) this.filteredList = this.productList;
    this.filteredList = this.productList.filter(
      product => product?.FormFactor.toLowerCase().includes(text.toLowerCase()) || 
      product?.OS.toLowerCase().includes(text.toLowerCase()) || 
      product.RAM === Number(text) || product.SSD === Number(text)
    );
  }

  removeProduct(id : number) {
    this.filteredList = this.filteredList.filter(product => product.id !== id);
  } 

  resetProductList() {
    this.filteredList = this.productList;
  }

}
