import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tableFilter'
})
export class TableFilterPipe implements PipeTransform {

  transform(list: any[], value: string, filterBy: string) {
    return value ? list.filter(restaurant => restaurant[filterBy] === value) : list;
  }
}
