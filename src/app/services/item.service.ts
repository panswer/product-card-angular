import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface ItemSchema {
  name: string,
  category: string,
  description: string,
  price: number,
  oldPrice?: number
}

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(
    private http: HttpClient
  ) {
  }

  getProduct() {
    return this
      .http
      .get<ItemSchema>('/assets/item.json');
  }
}
