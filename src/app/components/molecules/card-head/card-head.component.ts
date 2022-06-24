import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-head',
  templateUrl: './card-head.component.html',
  styleUrls: ['./card-head.component.css']
})
export class CardHeadComponent implements OnInit {
  @Input() title?: string;
  @Input() category?: string;
  constructor() { }

  ngOnInit(): void {
  }

}
