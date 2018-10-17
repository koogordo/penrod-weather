import { Component, OnInit } from '@angular/core';
import { WeatherApiService } from '../../services/data/weather-api.service';
@Component({
  selector: 'app-weather-frame',
  templateUrl: './weather-frame.component.html',
  styleUrls: ['./weather-frame.component.css']
})
export class WeatherFrameComponent implements OnInit {
  weather: any;
  constructor(private api: WeatherApiService) {}

  ngOnInit() {
    this.api.getWeather(524901).subscribe(res => {
      this.weather = res;
    });
  }
}
