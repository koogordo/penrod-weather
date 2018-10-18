import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-five-day',
  templateUrl: './five-day.component.html',
  styleUrls: ['./five-day.component.css']
})
export class FiveDayComponent implements OnInit {
  @Input()
  fiveDayForcasts: any;
  constructor() {}

  ngOnInit() {}
}
