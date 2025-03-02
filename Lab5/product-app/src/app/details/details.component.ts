import { Component, inject } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Product } from '../product-protocol';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  route : ActivatedRoute = inject(ActivatedRoute);
  product?: Product;
  
  productService : ProductService = inject(ProductService);
  constructor() {
  }

  ngOnInit(): void {
    const productId = Number(this.route.snapshot.paramMap.get('id')); 
    this.productService.getProductById(productId).then((prod) => {
      this.product = prod;
    });
  }

  changeTitle(title : string): void {
    const productId = Number(this.route.snapshot.paramMap.get('id')); 
    this.productService.updateProduct(productId, title).then((prod) => {
      this.product = prod;
    });
  } 

}
