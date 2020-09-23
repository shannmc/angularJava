import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {Renderer} from '@angular/compiler-cli/ngcc/src/rendering/renderer';

// tslint:disable-next-line:directive-selector
@Directive({selector: '[sortColumn]'})

export class SortDirective implements OnInit {
  @Input() data: any[];
  @Input('sortKey') key: any;
  private toggleSort            = false;

  constructor (private el: ElementRef, private renderer: Renderer) {
  }

  ngOnInit () {
    this.renderer.listen(this.el.nativeElement, 'click', (event) => {
      const parentNode = this.el.nativeElement.parentNode;
      const children   = parentNode.children;

      if (this.data && this.key) {
        const sortedData: any = this.sortArray();
      }
      this.toggleSort = !this.toggleSort;
    })
  }

  sortArray (): Array<any> {
    const tempArray: Array<any> = this.data;
    tempArray.sort((a, b) => {
      const aKey = a[this.key];
      const str1: string = a[this.key].toLowerCase();
      const str2: string = b[this.key].toLowerCase();
      if (this.toggleSort) {
        if (str1 < str2) {
          return -1;
        }
        if (str1 > str2) {
          return 1;
        }
      }
      else {
        if (str1 > str2) {
          return -1;
        }
        if (str1 < str2) {
          return 1;
        }
      }
      return 0;
    });
    return tempArray;
  }
}
