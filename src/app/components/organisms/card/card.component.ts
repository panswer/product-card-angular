import { Component, OnInit } from '@angular/core';

import { ItemService, ItemSchema } from '../../../services/item.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  item?: ItemSchema;

  constructor(
    private itemService: ItemService
  ) { }

  ngOnInit(): void {
    this
      .itemService
      .getProduct()
      .subscribe(response => {
        this.item = response;
      });
  }

}
