import { Injectable } from '@angular/core';
import {Restaurant} from './model/Restaurant'
import {User} from './model/User';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private restaurants: Array<Restaurant>;
  private users: Array<User>;
  private categories: Array<string>;

  getRestaurants(): Observable<Array<Restaurant>> {
    return of(this.restaurants);
  }

  getUsers(): Observable<Array<User>> {
    return of(this.users);
  }

  getCategories() {
    return this.categories;
  }
  updateUser(user: User) : Observable<User>{
    const originalUser = this.users.find(u => u.id === user.id);
    originalUser.name = user.name;
    return of(originalUser);
  }

  addUser(newUser: User, password: string) : Observable<User> {
    let id = 0;
    for ( const user of this.users) {
      if (user.id > id) {
        id = user.id
      }
    }
    newUser.id = id + 1;
    this.users.push(newUser);
    return of(newUser);
  }

  deleteUser(id: number) :  Observable<any>{
    const user = this.users.find(u => u.id === id);
    this.users.splice(this.users.indexOf(user), 1);
    return of(null);
  }

  updateRestaurant(restaurant: Restaurant) : Observable<Restaurant>{
    const originalRestaurant = this.restaurants.find(r => r.id === restaurant.id);
    originalRestaurant.name = restaurant.name;
    return of(originalRestaurant);
  }

  addRestaurant(newRestaurant: Restaurant) : Observable<Restaurant> {
    let id = 0;
    for ( const restaurant of this.restaurants) {
      if (restaurant.id > id) {
        id = restaurant.id
      }
    }
    newRestaurant.id = id + 1;
    this.restaurants.push(newRestaurant);
    return of(newRestaurant);
  }

  deleteRestaurant(id: number) : Observable<any>{
    const restaurant = this.restaurants.find(r => r.id === id);
    this.restaurants.splice(this.restaurants.indexOf(restaurant), 1);
    return of(null);
  }

  resetUserPassword(id: number) : Observable<any> {
    return of(null);
  }

  constructor() {
    this.restaurants = new Array<Restaurant>();
    const restaurant1 = new Restaurant();
    restaurant1.id = 1;
    restaurant1.name = 'Applebees';
    restaurant1.location = 'west ashley';
    restaurant1.category = 'American';
    restaurant1.rating = 1;
    restaurant1.haveTried = true;

    const restaurant2 = new Restaurant();
    restaurant2.id = 2;
    restaurant2.name = 'Chickfila';
    restaurant2.location = 'Mt Pleasant';
    restaurant2.category = 'Fast food';
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

    this.categories = new Array<string>();
    const category1 = 'Southwest';
    const category2 = 'Italian';
    const category3 = 'subs';
    this.categories.push(category1);
    this.categories.push(category2);
    this.categories.push(category3);

  }
}
