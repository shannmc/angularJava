import { Injectable } from '@angular/core';
import {Restaurant} from './model/Restaurant'
import {User} from './model/User';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private restaurants: Array<Restaurant>;
  private users: Array<User>;
  private categories: Array<string>;

  getRestaurants(): Observable<Array<Restaurant>> {
    return of(null);
  }

  getUsers(): Observable<Array<User>> {
    return of(null);
  }

  getCategories() {
    return null;
  }
  updateUser(user: User) : Observable<User>{
    return of(null);

  }

  addUser(newUser: User, password: string) : Observable<User> {
    return of(null);

  }

  deleteUser(id: number) :  Observable<any>{
    return of(null);

  }

  updateRestaurant(restaurant: Restaurant) : Observable<Restaurant>{
    return of(null);

  }

  addRestaurant(newRestaurant: Restaurant) : Observable<Restaurant> {
    return of(null);

  }

  deleteRestaurant(id: number) : Observable<any>{
    return of(null);

  }

  resetUserPassword(id: number) : Observable<any> {
    return of(null);
  }

  constructor(private http: HttpClient) {
  }

  getUser(id: number): Observable<User>{
    console.log(environment.restUrl);
    return this.http.get<User>(environment.restUrl + '/api/users/' + id)
  }
}
