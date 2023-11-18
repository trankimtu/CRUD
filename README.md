<h1 align="center">CRUD PROJECT</h1>
<p align="center">Create - Read - Update - Delete</p>
<h2> 1. Setup </h2>

<h4> 1.1 - Create project</h4>

```
    ng new CRUD
```
<h4> 1.2 - Install PrimeNG, PrimeFlex, PrimeIcons</h4>

```
    npm i primeng primeflex primeicons --save
```
Check package.json
```
    "primeflex": "^3.3.1",
    "primeicons": "^6.0.1",
    "primeng": "^16.7.1",
```
Modify angular.json
```
  "styles": [
    "src/styles.css",
    "node_modules/primeng/resources/themes/lara-light-blue/theme.css",
    "node_modules/primeng/resources/primeng.min.css",
    "node_modules/primeflex/primeflex.css",
    "node_modules/primeicons/primeicons.css"
  ],
```
<h4> 1.3 - JSON-Server</h4>

Check JSON-Server version

```
    json-server -v
```

If JSON Server is not installed

```
    npm install -g json-server
```

Create db.json file (This file will create at 2. after creating "product" module)<br>
Run watch db
```
    json-server <path/db-filename> --watch
```

<h2> 2. Create "product" module</h2>

```
    ng g m product
```

This will create ```product``` folder with ```product.module.ts``` inside<br>
Create file db.json which can be anywhere, in this project, I place it inside product folder<br>

```
    json-server src/app/product/db.json --watch
```
Enter resources url to browser<br>
Ex:
```
    http://localhost:3000/products
```
<h2> 3. Create "product" component</h2>

```
    ng g c product
```
After this command the list files below is generated inside product folder.
<ul>
    <li>product.component.css</li>
    <li>product.component.html</li>
    <li>product.component.spec.ts</li>
    <li>product.component.ts</li>
</ul>
Note: Until now, product folder contain:
<ul>
    <li>db.json</li>
    <li>product.component.css</li>
    <li>product.component.html</li>
    <li>product.component.spec.ts</li>
    <li>product.component.ts</li>
    <li>product.module.ts</li>
</ul>

<h2> 4. Create "product" service inside product folder</h2>
This service will handle http request
```
    ng g s product/product
```
After this command the list files below is generated inside product folder.
<ul>
    <li>product.service.spec.ts</li>
    <li>product.service.ts</li>
</ul>
Note: Until now, product folder contain:
<ul>
    <li>db.json</li>
    <li>product.component.css</li>
    <li>product.component.html</li>
    <li>product.component.spec.ts</li>
    <li>product.component.ts</li>
    <li>product.module.ts</li>
    <li>product.service.spec.ts</li>
    <li>product.service.ts</li>
</ul>


<h2> 5. Create "product" interface inside product folder</h2>
This interface will store database structor

```
    ng g i product/product
```
After this command the list files below is generated inside product folder.
<ul>
    <li>product.ts</li>
</ul>

Note: Until now, product folder contain:
<ul>
    <li>db.json</li>
    <li>product.component.css</li>
    <li>product.component.html</li>
    <li>product.component.spec.ts</li>
    <li>product.component.ts</li>
    <li>product.module.ts</li>
    <li>product.service.spec.ts</li>
    <li>product.service.ts</li>
    <li>product.ts</li>
</ul>

<h2> 6. Load product component to app component</h2>

<h4> 6.1 Export ProductComponent </h4>

File: product.module.ts
```
    exports: [
        ProductComponent
    ]
```
<h4> 6.2 Import ProductModule</h4>
File: app.module.ts

```
    import { ProductModule } from './product/product.module';
    import: [
        ProductModule
    ]
```
<h4> 6.3 Load product component template to app.component.html</h4>
File: app.component.html load selector in product.component.ts

```
    <app-product></app-product>
```

<h4 align="center">=====*****===== Sumary Section 6: After this step, the files would be: =====*****===== </h4>

File: product.module.ts
```
    // Angular Import
    import { NgModule } from '@angular/core'; // 1- Generate when creating product module
    import { CommonModule } from '@angular/common'; // 1- Generate when creating product module

    // Component Import
    import { ProductComponent } from './product.component'; // 2- Generate at creating product component

    @NgModule({
    declarations: [
        ProductComponent // 2- Generate at creating product component
    ],
    imports: [
        CommonModule, // 1- Generate when creating product module
    ],

    // 5.1 - Load product component to app component (5.2 in app.module.ts, 5.3 in app.component.html)
    exports: [ 
        ProductComponent
    ]
    })
    export class ProductModule { }
```

File: app.module.ts
```
    import { NgModule } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';

    import { AppComponent } from './app.component';

    //5.2 - Load product component to app component (5.1 in product.modules.ts, 5.3 in app.component.html)
    import { ProductModule } from './product/product.module';

    @NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        ProductModule  //5.2 - Load product component to app component (5.1 in product.modules.ts, 5.3 in app.component.html)
    ],
    providers: [],
    bootstrap: [AppComponent]
    })
    export class AppModule { }

```

File: app.component.html
```
    <!-- 6.3 - Load product component to app component (6.1 in product.module.ts, 6.2 in app.module.ts) -->
    <app-product></app-product> 
```
<h4 align="center">=====*****===== END SECTION 6 =====*****===== </h4>
<h4 align="center">=====*****===== END SECTION 6 =====*****===== </h4>
<h4 align="center">=====*****===== END SECTION 6 =====*****===== </h4>

<h2> 7. HTTP Request</h2>


<h4> 7.1 Database Interface - db.json </h4>
File: product.ts (Interface of database)

```
    export interface Product {
        id: number;
        title: string;
        price: number;
        description: string;
        category: string;
        image: string;
        rating: RatingProps;
        date: Date;
    }

    interface RatingProps {
        rate: number;
        count: number;
    }
```
<h4> 7.2 Import Http client module </h4>

Import the ```HttpClientModule``` in a module's TypeScript file<br>
File: product.module.ts

```
    import { HttpClientModule } from '@angular/common/http';
    imports: [
        ...
        HttpClientModule
    ],
```

<h4> 7.3 Injecting the HTTP client service into the service and declare service method</h4>

File: product.service.ts <br>
Import Dependencies:

```
    import { HttpClient } from '@angular/common/http';
    import { Injectable } from '@angular/core';
```

Inject Dependencies:<br>
Use the @Injectable decorator to make the service injectable and inject any required dependencies in the service's constructor.<br>

Dependency injection. HttpClient service is injected into the 'ProductServiace' class. This allows to use the 'http' instance to make HTTP request within the service<br>

```
    @Injectable({
        providedIn: 'root',
    })

    export class ProductService {
        constructor(private http: HttpClient) { }
    }

```

Declare Service method

```
    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>('http://localhost:3000/products')
    }
```

Service method that makes an HTTP GET request to retrieve a list of products from a specified API endpoint.<br>
This method return an observable of type 'Observable<Product[]>', indicating that it returns a stream of data over time, and the data is expected to be an array of 'Product' objects<br>
getProducts(): This is the method name, indicating that it's responsible for retrieving a list of products.<br>
Observable<Product[]>: It signifies that the method returns an observable stream of data, where the data is expected to be an array of Product objects.<br>
this.http.get<Product[]>('http://localhost:3000/products'): This is the actual HTTP GET request using Angular's HttpClient. It fetches data from the specified URL ('http://localhost:3000/products') and expects the response data to be an array of Product objects.

<h4> 7.4 Invoking/Calling a Service Method in a Component</h4>
File: product.component.ts<br>
Import the Service in the Component:<br>

```
    import { ProductService } from './product.service';
```

Inject the Service in the Component's Constructor:<br>

```
  constructor(private productService: ProductService){}
```

Call the Service Method:<br>

```
    getProductList() {
        this.productService.getProducts().subscribe(
        response => {
            this.products = response;
        }
        )
    }
```

<h4 align="center">=====*****===== Sumary Section 7: After this step, the files would be: =====*****===== </h4>
7.1 File: product.js - Interface

```
    export interface Product {
        id: number;
        title: string;
        price: number;
        description: string;
        category: string;
        image: string;
        rating: RatingProps;
        date: Date;
    }

    interface RatingProps {
        rate: number;
        count: number;
    }
```

7.2 File: product.module.ts - Import Http client module

```
    // Angular Import
    import { NgModule } from '@angular/core'; // 2-- Generate when creating product module
    import { CommonModule } from '@angular/common'; // 2-- Generate when creating product module
    import { HttpClientModule } from '@angular/common/http'; // 7.2 Import Http client module

    // Component Import
    import { ProductComponent } from './product.component'; // 3-- Generate at creating product component

    @NgModule({
    declarations: [
        ProductComponent // 3-- Generate at creating product component
    ],
    imports: [
        CommonModule, // 2-- Generate when creating product module
        HttpClientModule, // 7.2 Import Http client module
    ],
    exports: [ // 6.1-- Load product component to app component (6.2 in app.module.ts, 6.3 in app.component.html)
        ProductComponent
    ]
    })
    export class ProductModule { }

```

7.3 File: product.service.ts - 7.3 Injecting the HTTP client service into the service and declare service method

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

File: product.component.ts - 7.4 Invoking/Calling a Service Method in a Component

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
        displayAddModal = false;
        
        constructor(private productService: ProductService){}

        ngOnInit(): void {
            this.getProductList();
        }

        getProductList() {
            this.productService.getProducts().subscribe(
                response => {
                    this.products = response; // Data is fetched and store in response then set it to products parameter for display
                }
            )
        }
    }
```

<h4 align="center">=====*****===== END SECTION 7 =====*****===== </h4>
<h4 align="center">=====*****===== END SECTION 7 =====*****===== </h4>
<h4 align="center">=====*****===== END SECTION 7 =====*****===== </h4>





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
=== Start Add Button: ===
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
=== End Add button ===