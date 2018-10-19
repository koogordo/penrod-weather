import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pressureConverter'
})
export class PressureConverterPipe implements PipeTransform {
  transform(pressure: number): any {
    return Math.round(pressure * 0.0145038);
  }
}
