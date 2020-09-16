import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Restaurant} from '../model/Restaurant';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from "../model/User";

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  restaurants: Array<Restaurant>;
  selectedRestaurant: Restaurant;
  action: string;

  constructor(private dataService: DataService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.dataService.getUser(3).subscribe(
      (next) => {
        console.log(next);

        const user : User = new User();
        console.log(user.getRole());

      }
    );
    this.dataService.getRestaurants().subscribe(
      (next) => {
        this.restaurants = next;
      }
    );
    console.log(this.dataService.getRestaurants());
    this.route.queryParams.subscribe(
      (params) => {
        const id = params.id;
        this.action = params.action;
        if (id) {
          this.selectedRestaurant = this.restaurants.find(restaurant => {
            return restaurant.id === +id;
          })
        }
      }
    )
  }

  setRestaurant(id: number) {
    this.router.navigate(['/restaurants'], {queryParams: {id, action : 'view'}})
    }

  addRestaurant() {
    this.selectedRestaurant = new Restaurant();
    this.router.navigate(['/restaurants'], {queryParams: {action : 'add'}})

  }
}
