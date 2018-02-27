import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemDetailsComponent } from './item-details.component';
import { ItemsComponent } from './items.component';
import { VendorDetailsComponent } from './vendor-details.component';


@NgModule({
  declarations: [
    AppComponent,
    ItemDetailsComponent,
    ItemsComponent,
    VendorDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
