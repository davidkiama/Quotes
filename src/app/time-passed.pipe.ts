import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timePassed',
})
export class TimePassedPipe implements PipeTransform {
  transform(value: any): string {
    let today: any = new Date();
    let dayCreated: any = new Date(value);

    let days = (today - dayCreated) / (1000 * 3600 * 24);

    if (days < 1) {
      return `${Math.round(days * 24)}h`;
    }
    return `${Math.round(days)} d`;
  }
}
