# CRUD
Create - Read - Update - Delete

## 1. Create "product" module
```
    ng g m product
```
This will create ```product``` folder with ```product.module.ts``` inside
## 2. Create "product" component
```
    ng g c product
```
## 3. Create "product" service inside product folder
```
    ng g s product/product
```
## 4. Create "product" interface inside product folder
```
    ng g i product/product
```
## 5. Load product component to app component
### Export ProductComponent<br>
File: product.module.ts
```
    exports: [
        ProductComponent
    ]
```
### Import ProductModule
File: app.module.ts
```
    import { ProductModule } from './product/product.module';
    import: [
        ProductModule
    ]
```
### Load product component template to app.component.html
File: app.component.html
```
    <app-product></app-product>
```
## 6. Create API with HTTP protocol
### Setup HTTP service
File: product.module.ts
```
    import { HttpClientModule } from '@angular/common/http';
    imports: [
        CommonModule,
        HttpClientModule <----
    ],
```
### Apply HTTP service call
File: product.service.ts<br>
Define ```getProductList()``` function which get all data in db.json
```
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

    getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:3000/products')
  }
}
```

File: product.component.ts <br>
Call ```getProucList()``` method and store data to ```products``` 
```
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
}

```

### Create table and display the data
File: product.module.ts
Import TableModule
```
    // Angular Import
    import { NgModule } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { HttpClientModule } from '@angular/common/http';

    // Component Import
    import { ProductComponent } from './product.component';
    import { TableModule } from 'primeng/table';



    @NgModule({
    declarations: [
        ProductComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        TableModule
    ],
    exports: [
        ProductComponent
    ]
    })
    export class ProductModule { }
```

File: app.component.html
```
    <p-table [value]="products" [paginator]="true" [rows]="10">
        <ng-template pTemplate="header">
            <tr>
                <th>Title</th>
                <th>Price</th>
                <th>Description</th>
                <th>Category</th>
                <th>Image</th>
                <th>Rating</th>
            </tr>
        </ng-template>
        <ng-template pTemplate="body" let-product>
            <tr>
                <td>{{ product.title }}</td>
                <td class="text-right">{{ product.price }}</td>
                <td>{{ product.description }}</td>
                <td>{{ product.category }}</td>
                <td><img src="{{ product.image }}" width="20px" alt="Image"> </td>
                <td>{{ product.rating }}</td>
            </tr>
        </ng-template>
    </p-table>
```

### Create Add Product Button
Start Add Button:
File: product.module.ts
```
    // Angular Import
    import { NgModule } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { HttpClientModule } from '@angular/common/http';

    import { ButtonModule } from 'primeng/button'; // New added
    import { TableModule } from 'primeng/table';

    // Component Import
    import { ProductComponent } from './product.component';

    @NgModule({
    declarations: [
        ProductComponent
    ],
    imports: [
        ButtonModule, // New added
        CommonModule,
        HttpClientModule,
        TableModule
    ],
    exports: [
        ProductComponent
    ]
    })
    export class ProductModule { }

```

File: app.component.html
```
    <!-- New Added -->
    <div class="flex justify-content-between">
        <h2>Products</h2>
        <p-button label="Add Product" (click)="showAddModal()"></p-button>
    </div>
    <!-- End New Added -->


    <p-table [value]="products" [paginator]="true" [rows]="10">
        <ng-template pTemplate="header">
            <tr>
                <th>Title</th>
                <th>Price</th>
                <th>Description</th>
                <th>Category</th>
                <th>Image</th>
                <th>Rating</th>
            </tr>
        </ng-template>
        <ng-template pTemplate="body" let-product>
            <tr>
                <td>{{ product.title }}</td>
                <td class="text-right">{{ product.price }}</td>
                <td>{{ product.description }}</td>
                <td>{{ product.category }}</td>
                <td><img src="{{ product.image }}" width="20px" alt="Image"> </td>
                <td>{{ product.rating }}</td>
            </tr>
        </ng-template>
    </p-table>
```

File: product.component.ts
```
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
        displayAddModal = false; // New Added
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

        // Begin New Added
        showAddModal() {
            this.displayAddModal = true;
        }
        // End New Added
    }

```
End Add button 