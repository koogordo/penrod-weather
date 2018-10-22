import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  // Database service makes calls to the express API to pull in all the locations, //delete locations, and create locations.
  constructor(private http: HttpClient) {}
  getLocations(): Observable<any> {
    return this.http.get(`/api/location/all`);
  }

  getLocation(cityId): Observable<any> {
    return this.http.get(`/api/location/fetch/${cityId}`);
  }

  addLocation(location) {
    return this.http.post(`/api/location/createlocation`, location);
  }

  deleteLocation(cityId) {
    return this.http.post(`/api/location/deletelocation`, {
      cityId
    });
  }
}
