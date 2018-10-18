import { Routes } from '@angular/router';
// Import components to be routed
import { WeatherFrameComponent } from '../components/weather-frame/weather-frame.component';
export const routes: Routes = [
  {
    path: '',
    component: WeatherFrameComponent
  },
  { path: '*', redirectTo: '' }
];
