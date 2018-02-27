import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemDetailsComponent } from './item-details.component';
import { VendorDetailsComponent } from './vendor-details.component';
import { ItemsComponent } from './items.component';

const routes: Routes = [
  {
    path: 'vendor/:vendorId', component: VendorDetailsComponent, children: [
      {path: 'items', component: ItemsComponent},
      {path: 'items/:id', component: ItemDetailsComponent}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
