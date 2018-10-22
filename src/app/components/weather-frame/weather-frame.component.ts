import { Component, OnInit } from '@angular/core';
import { WeatherApiService } from '../../services/data/weather-api.service';
import { ActivatedRoute } from '@angular/router';
import { TemperatureConversionPipe } from '../../pipes/temperature-conversion.pipe';
import { DatePipe } from '@angular/common';
import { WindDirectionPipe } from '../../pipes/wind-direction.pipe';
import { PressureConverterPipe } from '../../pipes/pressure-converter.pipe';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-weather-frame',
  templateUrl: './weather-frame.component.html',
  styleUrls: ['./weather-frame.component.css']
})
export class WeatherFrameComponent implements OnInit {
  instanceObservables: Observable<any>[];

  currentWeather: any;
  fiveDayWeather: any[];
  currentDateTime;
  routeInputs;
  uvIndex: any;
  isCelsius: Boolean;
  isFahr: Boolean;
  constructor(private api: WeatherApiService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.instanceObservables = [];
    this.fiveDayWeather = [];
    this.currentWeather = {};
    this.currentDateTime = Date.now();
    this.isCelsius = false;
    this.isFahr = true;

    // subscribe to the route params so that new location info can be loaded as the
    // route changes
    this.routeInputs = this.route.params.subscribe(params => {
      const term = params['id'];

      // Grab the forecast for the current date & location ID
      this.api.getWeather(term).subscribe(res => {
        this.currentWeather = res;
        this.api.getUvIndex(res.coord.lat, res.coord.lon).subscribe(res => {
          this.currentWeather.uvIndex = Math.round(res.value);
        });
      });

      // Grab the forecasts for the next five days at this location
      this.api.getFiveDay(term).subscribe(res => {
        let tempWeather = res.list.map(forecast => {
          return forecast;
        });
        this.fiveDayWeather = this.distributeFiveDayInfo(tempWeather);
      });
    });
  }

  distributeFiveDayInfo(WeatherArr) {
    // Distribute all the info for the next five days into the proper day array so
    // we know which day is which
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
    // gets passed a forecast and a forecast description and sets the approriate
    // background image by pushing the class name onto the weather-frame class list.
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

  // setIsFahr and setIsCels are the methods that are used to switch between the C and F temperature displays
  setIsFahr() {
    this.isCelsius = false;
    this.isFahr = true;
  }

  setIsCels() {
    this.isFahr = false;
    this.isCelsius = true;
  }
}
