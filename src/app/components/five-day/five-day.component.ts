import { Component, OnInit, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TemperatureConversionPipe } from '../../pipes/temperature-conversion.pipe';
import { PressureConverterPipe } from '../../pipes/pressure-converter.pipe';
@Component({
  selector: 'app-five-day',
  templateUrl: './five-day.component.html',
  styleUrls: ['./five-day.component.css']
})
export class FiveDayComponent implements OnInit {
  // inputs from the weather frame so data only has to be loaded in one component // (weather-frame.component.tx), instead of in two components
  @Input()
  forecast: any;
  constructor() {}

  ngOnInit() {}
}
