import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'windDirection'
})
export class WindDirectionPipe implements PipeTransform {
  transform(deg: number): String {
    if (deg <= 23) {
      return 'E';
    } else if (deg > 23 && deg <= 67) {
      return 'NE';
    } else if (deg > 67 && deg <= 112) {
      return 'N';
    } else if (deg > 112 && deg <= 157) {
      return 'NW';
    } else if (deg > 157 && deg <= 205) {
      return 'W';
    } else if (deg > 205 && deg <= 247) {
      return 'SW';
    } else if (deg > 247 && deg <= 292) {
      return 'S';
    } else if (deg > 292 && deg <= 337) {
      return 'SE';
    } else if (deg > 337) {
      return 'E';
    }
  }
}
