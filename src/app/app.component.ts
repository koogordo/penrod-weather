import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatabaseService } from './services/data/database.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'penrod-weather';
  locations;
  submitSuccess: Boolean;
  submitFail: Boolean;
  successMessage: String;
  failMessage: String;
  newLocationForm = new FormGroup({
    cityId: new FormControl(),
    name: new FormControl(),
    country: new FormControl()
  });
  constructor(private db: DatabaseService, private router: Router) {}

  ngOnInit() {
    this.submitFail = false;
    this.submitSuccess = false;
    this.successMessage = '';
    this.failMessage = '';
    this.loadLocations();
  }

  onSubmit() {
    // Use the database service in the services directory to create a new location // doc on for submission
    this.db.addLocation(this.newLocationForm.value).subscribe(res => {
      this.handleResponse(res);
    });
  }

  deleteLocation(e: any) {
    // Use the database service in the services directory to delete a location doc
    const cityId = e.target.value;
    this.db.deleteLocation(cityId).subscribe(res => {
      this.handleResponse(res);
    });
  }

  handleResponse(res) {
    // Checks the responses of all the database calls and sets and dislpays
    // appropriate messages
    this.newLocationForm.reset();
    // pass resonse to displayAlert() and it will display alert with appropriate message
    this.displayAlert(res);
    this.loadLocations();
  }

  loadLocations() {
    // load all locations and navigate to the first location
    // this allows for added and deleted locations to appear and disappear
    // when added or deleted
    this.db.getLocations().subscribe(locs => {
      this.locations = locs;
      this.router.navigate([`/viewweather/${this.locations[0].cityId}`]);
    });
  }

  displayAlert(res) {
    if (res.success) {
      this.successMessage = res.message;
      this.submitSuccess = true;
      setTimeout(() => {
        this.submitSuccess = false;
        this.successMessage = '';
      }, 2000);
    } else {
      this.failMessage = res.message;
      this.submitFail = true;
      setTimeout(() => {
        this.submitFail = false;
        this.failMessage = '';
      }, 2000);
    }
  }
}
