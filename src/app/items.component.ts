import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-items',
  template: `
    <ul>
      <li *ngFor="let item of items">
        <a routerLink="{{item.id}}">{{item.name}}</a>
      </li>
    </ul>
  `,
  styles: []
})
export class ItemsComponent implements OnInit {
  private vendorItems = {
    '4': [{id: 1, name:'Rubber Ball'}, {id: 2, name: 'Rubber Ducky'}],
    '26': [{id: 3, name:'Die Cast Voltron'}, {id: 4, name:'M.A.S.K. Truck'}]
  };

  items;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => {
        const vendorId = params['vendorId'];
        this.items = this.vendorItems[vendorId];
      }
    )
  }

}
