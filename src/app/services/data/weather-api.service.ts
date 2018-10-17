import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import dataConfig from './config/dataConfig';
import { Observable } from 'rxjs';

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

  getWeather(id): Observable<any> {
    return this.http.get(`${this.weatherRoute}?id=${id}&APPID=${this.apiID}`);
  }
}
