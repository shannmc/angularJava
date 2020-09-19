import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Restaurant} from '../../model/Restaurant';
import {DataService} from '../../data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
})
export class RestaurantDetailComponent implements OnInit {

  @Input()
  restaurant: Restaurant;

  @Output()
  dataChangedEvent = new EventEmitter();

  message = '';

  constructor(private dataService: DataService,
              private router: Router ) {
  }

  ngOnInit() {
  }

  editRestaurant(){
    this.router.navigate(['restaurants'], {queryParams: {id: this.restaurant.id, action: 'edit'}})
  }

  deleteRestaurant() {
    this.message = 'Deleting...';
    this.dataService.deleteRestaurant(this.restaurant.id).subscribe(
      next => {
        this.dataChangedEvent.emit();
        this.router.navigate(['restaurants'])
      },
      (error) => {
        this.message = 'Sorry this restaurant cannot be deleted at this time';
      }
    )
  }

}

