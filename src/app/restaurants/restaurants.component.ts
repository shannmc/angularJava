import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";
import {Restaurant} from "../model/Restaurant";

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  restaurants: Array<Restaurant>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.restaurants = this.dataService.restaurants;
    console.log(this.dataService.restaurants)
  }

}
