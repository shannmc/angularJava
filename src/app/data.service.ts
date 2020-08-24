import { Injectable } from '@angular/core';
import {Restaurant} from './model/Restaurant'
import {User} from './model/User';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  restaurants: Array<Restaurant>;
  users: Array<User>;

  constructor() {
    this.restaurants = new Array<Restaurant>();
    const restaurant1 = new Restaurant();
    restaurant1.id = 1;
    restaurant1.name = 'Applebees';
    restaurant1.location = 'west ashley';

    const restaurant2 = new Restaurant();
    restaurant2.id = 2;
    restaurant2.name = 'Chickfila';
    restaurant2.location = 'Mt Pleasant';

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
