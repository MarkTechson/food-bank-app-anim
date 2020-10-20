import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-food-bank-location',
  templateUrl: './food-bank-location.component.html',
  styleUrls: ['./food-bank-location.component.css']
})
export class FoodBankLocationComponent implements OnInit {
  @Input() details;
  @Output() detailsChange = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
}
