import { Product } from './product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = 'http://localhost:3000'
  constructor(private http: HttpClient) { }

  // getProducts() {
  //   return this.http.get<Product[]>(`${this.baseUrl}/products`);
  // }

  // addProduct(postData: Product){
  //   return this.http.post(`${this.baseUrl}/products`, postData);
  // }

  // updateProduct(postData: Product) {
  //   return this.http.patch(`${this.baseUrl}/products/${postData.id}`, postData);
  // }

  // deleteProducts(id: Product['id']) {
  //   return this.http.delete(`${this.baseUrl}/products/${id}`);
  // }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:3000/products')
  }
}
