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
    const property = element.getAttribute('data-name');

    if(order === 'desc') {
      this.appSort.sort(sort.startSort(property, order));
      element.setAttribute('data-order', 'asc');
      element.classList.replace('fa-chevron-up', 'fa-chevron-down');
    } else {
      this.appSort.sort(sort.startSort(property, order));
      element.setAttribute('data-order', 'desc');
      element.classList.replace('fa-chevron-down', 'fa-chevron-up');


    }
  }

}
