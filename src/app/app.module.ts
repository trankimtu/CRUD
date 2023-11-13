import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductModule } from './product/product.module'; //5.2 - Load product component to app component (5.1 in product.modules.ts)

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductModule //5.2 - Load product component to app component (5.1 in product.modules.ts, 5.3 in app.component.html)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
