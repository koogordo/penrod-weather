import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DatabaseService } from './services/data/database.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'penrod-weather';
  locations;
  newLocFormGroup: FormGroup;
  constructor(private db: DatabaseService) {}

  ngOnInit() {
    this.db.getLocations().subscribe(locs => {
      this.locations = locs;
    });
  }
}
