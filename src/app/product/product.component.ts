import { Component } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  
  products: Product[] = [];
  displayAddModal = false;
  constructor(private productService: ProductService){}

  ngOnInit(): void {
    this.getProductList();
  }

  getProductList() {
    this.productService.getProducts().subscribe(
      response => {
        this.products = response;
      }
    )
  }

  showAddModal() {
    this.displayAddModal = true;
  }
}
