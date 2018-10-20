// App Core (@angular modules)
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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

// App Pipes
import { TemperatureConversionPipe } from './pipes/temperature-conversion.pipe';
import { WindDirectionPipe } from './pipes/wind-direction.pipe';
import { PressureConverterPipe } from './pipes/pressure-converter.pipe';

// Third party modules
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    WeatherFrameComponent,
    FiveDayComponent,
    SixteenDayComponent,
    TemperatureConversionPipe,
    WindDirectionPipe,
    PressureConverterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule
  ],
  providers: [DatabaseService, WeatherApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
