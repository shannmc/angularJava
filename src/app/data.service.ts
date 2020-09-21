import { Injectable } from '@angular/core';
import {Category, Restaurant} from './model/Restaurant'
import {User} from './model/User';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private restaurants: Array<Restaurant>;
  private users: Array<User>;
  private categories: Array<string>;

  getRestaurants(): Observable<Array<Restaurant>> {
    return this.http.get<Array<Restaurant>>(environment.restUrl + '/api/restaurants')
      .pipe(
        map(data => {
          const restaurants = new Array<Restaurant>();
          for (const restaurant of data) {
            restaurants.push(Restaurant.fromHttp(restaurant))
          }
          return restaurants;
        })
      );
  }

  getUsers(): Observable<Array<User>> {
    return this.http.get<Array<User>>(environment.restUrl + '/api/users')
      .pipe(
        map( data => {
          const users = new Array<User>();
          for (const user of data) {
            users.push(User.fromHttp(user))
          }
          return users;
        })
      );
  }

  getCategories() : Category[]{
    console.log(Restaurant.getCategories());
    return Restaurant.getCategories();
  }

  updateUser(user: User) : Observable<User>{
    return this.http.put<User>(environment.restUrl + '/api/users', user);

  }

  addUser(newUser: User, password: string) : Observable<User> {
    const fullUser = {id: newUser.id, name: newUser.name, password};
    return this.http.post<User>(environment.restUrl + '/api/users', fullUser);

  }

  deleteUser(id: number) :  Observable<any>{
    return this.http.delete(environment.restUrl + '/api/users/' + id);

  }

  updateRestaurant(restaurant: Restaurant) : Observable<Restaurant>{
    return this.http.put<Restaurant>(environment.restUrl + '/api/restaurants', restaurant);

  }

  addRestaurant(newRestaurant: Restaurant) : Observable<Restaurant> {
    return this.http.post<Restaurant>(environment.restUrl + '/api/restaurants', newRestaurant)
  }

  deleteRestaurant(id: number) : Observable<any>{
    return this.http.delete(environment.restUrl + '/api/restaurants/' + id);

  }

  resetUserPassword(id: number) : Observable<any> {
    return this.http.get(environment.restUrl + '/api/users/resetPassword/' + id);
  }

  constructor(private http: HttpClient) {
  }

  getUser(id: number): Observable<User>{
    console.log(environment.restUrl);
    return this.http.get<User>(environment.restUrl + '/api/users/' + id)
      .pipe(
        map(data => {
          return User.fromHttp(data)
      }
    ))
  }
}
