import { Component, OnInit } from '@angular/core';
import { WeatherApiService } from '../../services/data/weather-api.service';
import { ActivatedRoute } from '@angular/router';
import { TemperatureConversionPipe } from '../../pipes/temperature-conversion.pipe';

@Component({
  selector: 'app-weather-frame',
  templateUrl: './weather-frame.component.html',
  styleUrls: ['./weather-frame.component.css']
})
export class WeatherFrameComponent implements OnInit {
  weather: any;
  fiveDayWeather: any[];
  sixteenDayWeather: any;
  constructor(private api: WeatherApiService, private route: ActivatedRoute) {
    this.fiveDayWeather = [];
    this.weather = {};
  }

  ngOnInit() {
    this.api.getWeather(this.route.snapshot.params['id']).subscribe(res => {
      this.weather = res;
      console.log(res);
    });

    this.api.getFiveDay(this.route.snapshot.params['id']).subscribe(res => {
      console.log(res);
      let tempWeather = res.list.map(forecast => {
        return forecast;
      });
      this.fiveDayWeather = this.sortFiveDay(tempWeather);
      console.log(this.fiveDayWeather);
    });
  }

  sortFiveDay(weatherArr) {
    let day1 = [];
    let day2 = [];
    let day3 = [];
    let day4 = [];
    let day5 = [];
    for (let i = 0; i < weatherArr.length; i++) {
      if (i < 7) {
        day1.push(weatherArr[i]);
      } else if (i >= 7 && i < 15) {
        day2.push(weatherArr[i]);
      } else if (i >= 15 && i < 23) {
        day3.push(weatherArr[i]);
      } else if (i >= 23 && i < 31) {
        day4.push(weatherArr[i]);
      } else if (i >= 31 && i < 39) {
        day5.push(weatherArr[i]);
      }
    }
    return [day1, day2, day3, day4, day5];
  }
}
