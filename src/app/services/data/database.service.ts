import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  rootUrl;
  constructor(private http: HttpClient) {
    this.rootUrl = 'http://localhost:5000';
  }

  getLocations(): Observable<any> {
    return this.http.get(`${this.rootUrl}/api/location/all`);
  }

  getLocation(cityId): Observable<any> {
    return this.http.get(`${this.rootUrl}/api/location/fetch/${cityId}`);
  }

  addLocation(location) {
    console.log(location);
    return this.http.post(
      `${this.rootUrl}/api/location/createlocation`,
      location
    );
  }

  deleteLocation(cityId) {
    return this.http.post(`${this.rootUrl}/api/location/deletelocation`, {
      cityId
    });
  }
}
