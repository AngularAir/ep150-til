import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vendor-details',
  template: `
    <h2>Vendor #{{vendorId}}</h2>
    <a routerLink="items">View Items</a>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class VendorDetailsComponent implements OnInit {
  vendorId: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => {
        this.vendorId = params['vendorId'];
      }
    )
  }

}
