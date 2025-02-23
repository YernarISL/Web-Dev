import { Injectable } from '@angular/core';
import { Product } from './product-protocol';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = "http://localhost:3000/products";

  constructor() { }

  async getAllProducts() : Promise<Product[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getProductById(id : Number) : Promise<Product | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }

  // getProductByOS(OS : string) : Product | undefined {
  //   return this.productsList.find(product => product.OS === OS);
  // }

  // getProductByFactor(factor : string) : Product | undefined {
  //   return this.productsList.find(product => product.FormFactor === factor);
  // }
 
}
