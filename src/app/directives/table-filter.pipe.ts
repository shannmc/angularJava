import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tableFilter'
})
export class TableFilterPipe implements PipeTransform {

  transform(list: any[], value: string) {
    console.log('transforming:');

    // return value ? list.filter(item => item.location === value) : list;
    console.log(value);
    console.log(list);
    return value ? list.filter(item => item.location === value) : list;

  }

}
