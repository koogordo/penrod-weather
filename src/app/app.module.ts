// App Core (@angular modules)
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// Custom Modules
import { AppRoutingModule } from './app-routing/app-routing.module';
// App Components
import { AppComponent } from './app.component';
import { WeatherFrameComponent } from './components/weather-frame/weather-frame.component';

// App Services
import { DatabaseService } from './services/data/database.service';
import { WeatherApiService } from './services/data/weather-api.service';
import { FiveDayComponent } from './components/five-day/five-day.component';
import { SixteenDayComponent } from './components/sixteen-day/sixteen-day.component';
import { TemperatureConversionPipe } from './pipes/temperature-conversion.pipe';

// Third Party Dependencies

@NgModule({
  declarations: [AppComponent, WeatherFrameComponent, FiveDayComponent, SixteenDayComponent, TemperatureConversionPipe],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [DatabaseService, WeatherApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
