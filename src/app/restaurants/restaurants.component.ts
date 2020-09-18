import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Restaurant} from '../model/Restaurant';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  restaurants: Array<Restaurant>;
  selectedRestaurant: Restaurant;
  action: string;
  loadingData = true;
  message = 'Please wait...getting list of restaurants';
  reloadAttemptCount = 0;

  constructor(private dataService: DataService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.dataService.getRestaurants().subscribe(
      (next) => {
        this.restaurants = next;
        this.loadingData = false;
        this.processUrlParams();
      },
      (error) => {
        if (error.status === 402) {
          this.message  = 'Sorry - you need to pay to use this application. ';
        } else {
          this.reloadAttemptCount++;
          if (this.reloadAttemptCount <= 10) {
            this.message = 'Sorry - something went wrong, trying again.... please wait ';
            this.loadData();
          } else {
            this.message = 'Sorry - something went wrong, please contact support.';
          }

        }
      }
    );
  }

  processUrlParams() {
    this.route.queryParams.subscribe(
      (params) => {
        this.action = null;
        const id = params.id;
        if (id) {
          this.selectedRestaurant = this.restaurants.find( restaurant => restaurant.id === +id);
          this.action = params.action;
        }
        if (params.action === 'add') {
          this.selectedRestaurant = new Restaurant();
          this.action = 'edit';
          // this.formResetService.resetRoomFormEvent.emit(this.selectedRoom);
        }
      }
    );
  }



  setRestaurant(id: number) {
    this.router.navigate(['/restaurants'], {queryParams: {id, action : 'view'}});
    }

  addRestaurant() {
    this.selectedRestaurant = new Restaurant();
    this.router.navigate(['/restaurants'], {queryParams: {action : 'add'}});

  }
}
