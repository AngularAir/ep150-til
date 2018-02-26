import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import { DataService, Item } from './data.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-item-details',
  template: `
    <h2 *ngIf="item$ | async as item">{{item.name}}</h2>
    <div>
      <strong>Item #{{itemId}}</strong>
    </div>
    <div>
      Set stock level: 
      <input type="text" [formControl]="stockField">
      <button (click)="saveStockLevel()">Save</button>
    </div>
  `,
  styles: []
})
export class ItemDetailsComponent implements OnInit {
  itemId?: string;
  stockField = new FormControl();
  item$?: Observable<Item>;

  constructor(private activatedRoute: ActivatedRoute,
              private dataService: DataService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
    params => {
      this.itemId = params.get('id');
      this.item$ = this.dataService.getItemById(this.itemId);
      this.stockField.patchValue('', {emitEvent: false});
      }
    );
  }

  saveStockLevel() {
    console.log(`New stock level is ${this.stockField.value}`);
  }

}
