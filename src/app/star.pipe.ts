import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'star'
})
export class StarPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let returnValue: number;
    if (value >= 500) {
      returnValue = 1;
    } else if (value < 500 && value >= 100) {
      returnValue = 2;
    } else {
      returnValue = 3;
    }

    return returnValue > 1 ? `${returnValue} ${args}s` : `${returnValue} ${args}`;
  }

}
