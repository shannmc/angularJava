import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tableFilter'
})
export class TableFilterPipe implements PipeTransform {

  transform(list: any[], value: string) {
    console.log('working');
    return value ? list.filter(restaurant => restaurant.location === value) : list;
  }
}
