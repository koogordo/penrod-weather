import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temp'
})
export class TemperatureConversionPipe implements PipeTransform {
  transform(temp: any, convertTo = 'f'): any {
    if (convertTo === 'f') {
      return Math.round(temp * (9 / 5) - 459.67).toString();
    } else {
      return Math.floor(temp - 273.15).toString();
    }
  }
}
