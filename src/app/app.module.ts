import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductModule } from './product/product.module'; //6.2 - Load product component to app component (6.1 in product.modules.ts, 6.3 in app.component.html)

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductModule //6.2 - Load product component to app component (6.1 in product.modules.ts, 6.3 in app.component.html)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
