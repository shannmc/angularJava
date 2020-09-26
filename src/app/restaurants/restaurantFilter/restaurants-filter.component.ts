import {Component, EventEmitter, HostBinding, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-restaurants-filter',
  templateUrl: './restaurants-filter.component.html',
  styleUrls: ['./restaurants-filter.component.css']
})
export class RestaurantsFilterComponent implements OnInit {
  location: string;
  category: string;

  @Output()
  dataChangedEvent = new EventEmitter();

  shareLocationWithParent() {
    this.dataChangedEvent.emit(this.location)
  }

  ngOnInit() {
  }
}
