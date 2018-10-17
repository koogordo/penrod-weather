import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {
  configJson = '../../../assets/config/weatherServiceConfig.json';
  _config;
  apiID;
  weatherRoute;
  constructor(private http: HttpClient) {
    http
      .get(this.configJson)
      .toPromise()
      .then((res: Response) => {
        this._config = res;
      });
  }

  getWeatherByZip(zip, countryCode) {
    return this.http.get(
      `${this._config.weatherUrl}?zip=${zip},${countryCode}&APPID=${
        this._config.apiID
      }`
    );
  }
}
