import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperatureConverter'
})
export class TemperatureConverterPipe implements PipeTransform {

  transform(value: number, unit: string) {

    if (value && !isNaN(value)) {

      if (unit === 'K') {
        let tempareature = (value - 273.15);
        return tempareature.toFixed(0);
      }
    }
    return;
  }

}