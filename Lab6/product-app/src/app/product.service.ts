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

  async updateProduct(id : Number, title : string) {
    const product = await this.getProductById(id);
    const requestOptions = {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(
        {
          "name": title,
          "originalName": product?.originalName,
          "hlink": product?.hlink,
          "OS": product?.OS,
          "RAM": product?.RAM,
          "SSD": product?.SSD, 
          "FormFactor": product?.FormFactor,
          "photo": product?.photo
        }
      ),
    };
    const response = await fetch(`${this.url}/${id}`, requestOptions);
    return await response.json();
  }

  async returnProduct() {

  }
}
