import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class DataService {

  constructor(private httpClient: HttpClient) { }

  getItemById(id: string) {
    return this.httpClient.get<Item>(`items/${id}`);
  }

  addItem(item: Item) {
    return this.httpClient.post<NewItemResponse>('items', item)
      .pipe(
        map(result => result.newId)
      )
  }

}

export interface Item {
  id?: string;
  name: string;
}

interface NewItemResponse {
  newId: number;
}
