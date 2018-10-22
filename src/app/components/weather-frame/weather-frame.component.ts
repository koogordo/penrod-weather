import { Component, OnInit } from '@angular/core';
import { WeatherApiService } from '../../services/data/weather-api.service';
import { ActivatedRoute } from '@angular/router';
import { TemperatureConversionPipe } from '../../pipes/temperature-conversion.pipe';
import { DatePipe } from '@angular/common';
import { WindDirectionPipe } from '../../pipes/wind-direction.pipe';
import { PressureConverterPipe } from '../../pipes/pressure-converter.pipe';

@Component({
  selector: 'app-weather-frame',
  templateUrl: './weather-frame.component.html',
  styleUrls: ['./weather-frame.component.css']
})
export class WeatherFrameComponent implements OnInit {
  currentWeather: any;
  fiveDayWeather: any[];
  sixteenDayWeather: any;
  currentDateTime;
  routeInputs;
  uvIndex: any;
  isCelsius;
  isFahr;
  constructor(private api: WeatherApiService, private route: ActivatedRoute) {
    this.fiveDayWeather = [];
    this.currentWeather = {};
  }

  ngOnInit() {
    this.currentDateTime = Date.now();
    this.isCelsius = false;
    this.isFahr = true;
    this.routeInputs = this.route.params.subscribe(params => {
      const term = params['id'];

      this.api.getWeather(term).subscribe(res => {
        this.currentWeather = res;
        this.api.getUvIndex(res.coord.lat, res.coord.lon).subscribe(res => {
          this.currentWeather.uvIndex = Math.round(res.value);
        });
      });

      this.api.getFiveDay(term).subscribe(res => {
        let tempWeather = res.list.map(forecast => {
          return forecast;
        });
        this.fiveDayWeather = this.sortFiveDay(tempWeather);
      });
    });
  }

  sortFiveDay(WeatherArr) {
    let day1 = [];
    let day2 = [];
    let day3 = [];
    let day4 = [];
    let day5 = [];
    for (let i = 0; i < WeatherArr.length; i++) {
      if (i < 7) {
        day1.push(WeatherArr[i]);
      } else if (i >= 7 && i < 15) {
        day2.push(WeatherArr[i]);
      } else if (i >= 15 && i < 23) {
        day3.push(WeatherArr[i]);
      } else if (i >= 23 && i < 31) {
        day4.push(WeatherArr[i]);
      } else if (i >= 31 && i < 39) {
        day5.push(WeatherArr[i]);
      }
    }
    return [day1, day2, day3, day4, day5];
  }

  getForecastBackground(forecast, desc) {
    let classes = ['flex-frame', 'full-height', 'weather-panel-bg'];
    if (forecast === 'Clear') {
      classes.push('clear-skys');
    } else if (forecast === 'Clouds') {
      if (desc === 'overcast clouds') {
        classes.push('overcast');
      } else {
        classes.push('clouds');
      }
      classes.push('cloudy');
    } else if (forecast === 'Rain' || forecast === 'Drizzle') {
      classes.push('rain');
    } else if (forecast === 'Snow') {
      classes.push('snow');
    } else if (forecast === 'Haze' || forecast === 'Fog') {
      classes.push('fog');
    }
    return classes;
  }

  setIsFahr() {
    this.isCelsius = false;
    this.isFahr = true;
  }

  setIsCels() {
    this.isFahr = false;
    this.isCelsius = true;
  }
}
