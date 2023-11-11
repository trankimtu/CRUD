// Angular Import
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Using for p-dialog

import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';

// Component Import
import { ProductComponent } from './product.component';

@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    BrowserAnimationsModule,
    ButtonModule,
    CommonModule,
    DialogModule,
    HttpClientModule,
    TableModule
  ],
  exports: [
    ProductComponent
  ]
})
export class ProductModule { }
