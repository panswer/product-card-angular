import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-body',
  templateUrl: './card-body.component.html',
  styleUrls: ['./card-body.component.css']
})
export class CardBodyComponent implements OnInit {

  @Input() description?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
