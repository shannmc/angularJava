import {Component, Input, OnInit} from '@angular/core';
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

  constructor(private dataService: DataService,
              private router: Router ) {
  }

  ngOnInit() {
  }

  editRestaurant(){
    this.router.navigate(['restaurants'], {queryParams: {id: this.restaurant.id, action: 'edit'}})
  }

}

