import {Component, Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';
import {Sort} from './sort';

@Directive({
  selector: '[appSort]'
})

export class SortDirective {
  @Input() appSort: Array<any>;

  constructor(private renderer: Renderer2, private targetElement: ElementRef) {
  }

  @HostListener('click')
  sortData() {
    const sort = new Sort();
    const element = this.targetElement.nativeElement;
    const order = element.getAttribute('data-order');
    const type = element.getAttribute('data-type');
    const property = element.getAttribute('data-name');
    // const classProperty = element.getAttribute('class');

    if(order === 'desc') {
      this.appSort.sort(sort.startSort(property, order, type));
      element.setAttribute('data-order', 'asc');
      // element.setAttribute('classProperty', 'fa fa-chevron-up')
    } else {
      this.appSort.sort(sort.startSort(property, order, type));
      element.setAttribute('data-order', 'desc');
      // element.setAttribute('classProperty', 'fa fa-chevron-down')
    }

  }


}
