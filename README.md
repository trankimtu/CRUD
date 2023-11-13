<h1 align="center">CRUD PROJECT</h1>
<p align="center">Create - Read - Update - Delete</p>
<h2> A. Setup </h2>

<h4> 1. Create project</h4>

```
    ng new CRUD
```
<h4> 2. Install PrimeNG, PrimeFlex, PrimeIcons</h4>

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
<h4> 3. JSON-Server</h4>

Check JSON-Server version

```
    json-server -v
```

If JSON Server is not installed

```
    npm install -g json-server
```

Create db.json file (This step will do at B.1.)<br>
Run watch db
```
    json-server <path/db-filename> --watch
```

<h2> B. Start Creating Module and Component</h2>

<h3> 1. Create "product" module</h3>

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
<h3> 2. Create "product" component</h3>

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

<h3> 3. Create "product" service inside product folder</h3>

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


<h3> 4. Create "product" interface inside product folder</h3>
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

<h3> 5. Load product component to app component</h3>

<h4> 5.1 Export ProductComponent </h4>

File: product.module.ts
```
    exports: [
        ProductComponent
    ]
```
### 5.2 Import ProductModule
File: app.module.ts
```
    import { ProductModule } from './product/product.module';
    import: [
        ProductModule
    ]
```
### 5.3 Load product component template to app.component.html
File: app.component.html load selector in product.component.ts
```
    <app-product></app-product>
```

### Note: After this step, the files would be:
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

    //5.2 - Load product component to app component (5.1 in product.modules.ts)
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
    <app-product></app-product> <!-- 5.3 - Load product component to app component (5.1 in product.module.ts, 5.2 in app.module.ts) -->
```


<h3> 6. Handle HTTP protocol</h3>
<ul>
    <li>Create the API</li>
    <li>Call the API and make it responds in the back-end</li>
</ul>
Another words:
<ul>
    <li>Connect to database</li>
    <li>Query data and store in a parameter to use later</li>
</ul>
JSON-Server is used as back-end database <br>


###  6.1 Import HttpClientModule
File: product.module.ts
```
    import { HttpClientModule } from '@angular/common/http';
    imports: [
        HttpClientModule
    ],
```
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
  
  products: Product[] = []; <
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