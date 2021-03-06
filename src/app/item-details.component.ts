import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-details',
  template: `
    <h2>Item #{{itemId}} for Vendor #{{vendorId}}</h2>
  `,
  styles: []
})
export class ItemDetailsComponent implements OnInit {
  vendorId;
  itemId;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => {
        this.vendorId = params['vendorId'];
        this.itemId = params['id'];
      }
    );
  }

}
