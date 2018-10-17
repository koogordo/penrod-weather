import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherApiService } from './services/data/weather-api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'penrod-weather';
  forecast;
  constructor(private api: WeatherApiService) {}

  ngOnInit() {
   this.api.getWeatherByZip(54601, 'us').subscribe(res => {
      this.forecast = res;
      console.log(res);
    });
  }

  getWeather() {
    
  }
}
