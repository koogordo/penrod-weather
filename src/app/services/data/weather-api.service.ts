import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import dataConfig from './config/dataConfig';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {
  apiID: String;
  weatherRoute: String;
  fiveDayRoute: String;
  sixteenDayRoute: String;
  uvIndexRoute: String;
  constructor(private http: HttpClient) {
    this.apiID = dataConfig.apiID;
    this.weatherRoute = dataConfig.weatherUrl;
    this.fiveDayRoute = dataConfig.fiveDayForecastUrl;
    this.sixteenDayRoute = dataConfig.sixteenDayForecastUrl;
    this.uvIndexRoute = dataConfig.uvIndexUrl;
  }

  getWeather(id): Observable<any> {
    return this.http.get(`${this.weatherRoute}?id=${id}&APPID=${this.apiID}`);
  }

  getFiveDay(id): Observable<any> {
    return this.http.get(`${this.fiveDayRoute}?id=${id}&APPID=${this.apiID}`);
  }

  getUvIndex(lat: number, lon: number): Observable<any> {
    return this.http.get(
      `${this.uvIndexRoute}?APPID=${this.apiID}&lat=${lat}&lon=${lon}`
    );
  }
}
