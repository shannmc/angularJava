import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Restaurant} from '../../model/Restaurant';
import {DataService} from '../../data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
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

  formatLocation(location: string) : string {
    if (location) {
      console.log('here1')
      const words = location.split('_');
      const newLocation = words.join(' ');
      return newLocation.toLowerCase()
        .split(' ')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ');
    } else return '';
  }

  editRestaurant(){
    this.router.navigate(['restaurants'], {queryParams: {id: this.restaurant.id, action: 'edit'}})
  }

  deleteRestaurant() {
    const result = confirm('Are you sure you wish to delete this user?');
    if(result) {
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

}

