// Angular Import
import { NgModule } from '@angular/core'; // 1- Generate when creating product module
import { CommonModule } from '@angular/common'; // 1- Generate when creating product module
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Using for p-dialog

import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';

// Component Import
import { ProductComponent } from './product.component'; // 2- Generate at creating product component

@NgModule({
  declarations: [
    ProductComponent // 2- Generate at creating product component
  ],
  imports: [
    BrowserAnimationsModule,
    ButtonModule,
    CommonModule, // 1- Generate when creating product module
    DialogModule,
    HttpClientModule,
    TableModule
  ],
  exports: [ // 5.1 - Load product component to app component (5.2 in app.module.ts, 5.3 in app.component.html)
    ProductComponent
  ]
})
export class ProductModule { }
