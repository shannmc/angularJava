export class Sort {
  private sortOrder = 1;
  private collator = new Intl.Collator(undefined, {
    numeric: true,
    sensitivity: 'base',
  });

  constructor() {
  }

  public startSort(property, order, type) {

    if(type === 'boolean') {
      if(order === 'desc') {
        this.sortOrder = -1;
      } return (a, b) => {
        return this.collator.compare(a[property], b[property]) * this.sortOrder;
      }
    } else {
      if(order === 'desc') {
        this.sortOrder = -1;
      } return (a, b) => {
        if(!a[property] && !b[property]){
          return 0;
        }
        if(!a[property]){
          return 1;
        }
        if(!b[property]){
          return -1;
        }
        return this.collator.compare(a[property], b[property]) * this.sortOrder;
      }
    }
  }
}

