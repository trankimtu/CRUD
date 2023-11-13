// Angular Import
import { NgModule } from '@angular/core'; // 2-- Generate when creating product module
import { CommonModule } from '@angular/common'; // 2-- Generate when creating product module
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Using for p-dialog

import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';

// Component Import
import { ProductComponent } from './product.component'; // 3-- Generate at creating product component

@NgModule({
  declarations: [
    ProductComponent // 3-- Generate at creating product component
  ],
  imports: [
    BrowserAnimationsModule,
    ButtonModule,
    CommonModule, // 2-- Generate when creating product module
    DialogModule,
    HttpClientModule, // 7.1-- Setup HTTP Service
    TableModule
  ],
  exports: [ // 6.1-- Load product component to app component (6.2 in app.module.ts, 6.3 in app.component.html)
    ProductComponent
  ]
})
export class ProductModule { }
