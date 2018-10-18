import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pressureConverter'
})
export class PressureConverterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
