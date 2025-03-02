import { Component, Input, Output, EventEmitter, Renderer2 } from '@angular/core';
import { Product } from '../product-protocol';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [RouterModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() product!:Product;
  @Output() deleteProduct = new EventEmitter<number>();
  @Output() likedProduct = new EventEmitter<number>();

  heartStyle = 'position: absolute; right: 300px; top: 0px; transform: scale(0.3); fill: #000';
  num : number = 0;

  onDeleteClick() {
    this.deleteProduct.emit(this.product.id);
  }

  onLikeClick() : void {
    this.heartStyle = 'position: absolute; right: 300px; top: 0px; transform: scale(0.3); fill: #ff0000'
    this.num += 1;
  }
}
