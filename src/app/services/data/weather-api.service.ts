import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import dataConfig from './config/dataConfig';
@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {
  apiID;
  weatherRoute;
  fiveDayRoute;
  sixteenDayRoute;
  constructor(private http: HttpClient) {
    this.apiID = dataConfig.apiID;
    this.weatherRoute = dataConfig.weatherUrl;
    this.fiveDayRoute = dataConfig.fiveDayForecastUrl;
    this.sixteenDayRoute = dataConfig.sixteenDayForecastUrl;
  }

  getWeatherByZip(zip, countryCode) {
    return this.http.get(
      `${this.weatherRoute}?zip=${zip},${countryCode}&APPID=${
        this.apiID
      }`
    );
  }
}
