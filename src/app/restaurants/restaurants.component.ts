import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";
import {Restaurant} from "../model/Restaurant";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  restaurants: Array<Restaurant>;
  selectedRestaurant: Restaurant;

  constructor(private dataService: DataService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.restaurants = this.dataService.restaurants;
    console.log(this.dataService.restaurants);
    this.route.queryParams.subscribe(
      (params) => {
        const id = params['id'];
        if (id) {
          this.selectedRestaurant = this.restaurants.find(restaurant => {
            return restaurant.id == +id;
          })
        }
      }
    )
  }

  setRestaurant(id: number) {
    this.router.navigate(['/restaurants'], {queryParams: {id}})
    }
}
