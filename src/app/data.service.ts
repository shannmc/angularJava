import { Injectable } from '@angular/core';
import {Restaurant} from './model/Restaurant'
import {User} from './model/User';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private restaurants: Array<Restaurant>;
  private users: Array<User>;

  getRestaurants(): Observable<Array<Restaurant>> {
    return of(this.restaurants);
  }

  getUsers(): Observable<Array<User>> {
    return of(this.users);
  }

  constructor() {
    this.restaurants = new Array<Restaurant>();
    const restaurant1 = new Restaurant();
    restaurant1.id = 1;
    restaurant1.name = 'Applebees';
    restaurant1.location = 'west ashley';
    restaurant1.category = "American";
    restaurant1.rating = 1;
    restaurant1.haveTried = true;

    const restaurant2 = new Restaurant();
    restaurant2.id = 2;
    restaurant2.name = 'Chickfila';
    restaurant2.location = 'Mt Pleasant';
    restaurant2.category = "Fast food";
    restaurant2.haveTried = false;

    this.restaurants.push(restaurant1);
    this.restaurants.push(restaurant2);

    this.users = new Array<User>();

    const user1 = new User();
    user1.id = 1;
    user1.name = 'Shannon';
    const user2 = new User();
    user2.id = 2;
    user2.name = 'Leah';
    const user3 = new User();
    user3.id = 3;
    user3.name = 'Doug';
    this.users.push(user1);
    this.users.push(user2);
    this.users.push(user3);
  }
}
