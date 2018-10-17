// App Core (@angular modules)
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// App Components
import { AppComponent } from './app.component';

// App Services
import { DatabaseService } from './services/data/database.service';
import { WeatherApiService } from './services/data/weather-api.service';

// Third Party Dependencies

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [DatabaseService, WeatherApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
