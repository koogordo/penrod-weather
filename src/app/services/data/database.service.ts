import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  constructor(private http: HttpClient) {}

  getLocations(): Observable<any> {
    return this.http.get('http://localhost:5000/api/location/all');
  }

  getLocation(cityId): Observable<any> {
    return this.http.get(`http://localhost:5000/api/location/fetch/${cityId}`);
  }
}
