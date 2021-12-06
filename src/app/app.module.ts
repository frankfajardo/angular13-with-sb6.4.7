import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QuantityInputComponent } from './shared/components/quantity-input/quantity-input.component';

@NgModule({
  declarations: [AppComponent, QuantityInputComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
