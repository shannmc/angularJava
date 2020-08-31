import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Restaurant} from '../../model/Restaurant';
import {DataService} from '../../data.service';

@Component({
  selector: 'app-restaurant-edit',
  templateUrl: './restaurant-edit.component.html',
  styleUrls: ['./restaurant-edit.component.css']

})
export class RestaurantEditComponent implements OnInit {

  @Input()
  restaurant: Restaurant;
  formRestaurant: Restaurant;
  message: string;
  nameIsValid = false;

  constructor(private dataService: DataService,
              private router: Router) { }

  ngOnInit() {
    this.formRestaurant = Object.assign({}, this.restaurant)
    this.checkIfNameIsValid();
  }

  checkIfNameIsValid() {
    if(this.formRestaurant.name) {
      this.nameIsValid = this.formRestaurant.name.trim().length > 0;
    } else {
      this.nameIsValid = false;
    }
  }

  onSubmit() {
    if(this.formRestaurant.id == null) {
      this.dataService.addRestaurant(this.formRestaurant).subscribe(
        (restaurant: Restaurant) => {
          this.router.navigate(['restaurants'], {queryParams: {action: 'view', id: restaurant.id}})
        }
      )
    } else {
      this.dataService.updateRestaurant(this.formRestaurant).subscribe(
        (restaurant: Restaurant) => {
          this.router.navigate(['restaurants'], {queryParams: {action: 'view', id: restaurant.id}})
        }
      )
    }

  }
}
