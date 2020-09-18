import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { UsersComponent } from './admin/users/users.component';
import {RouterModule, Routes} from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {RestaurantDetailComponent} from './restaurants/restaurantDetails/restaurant-detail.component';
import {UserDetailComponent} from './admin/users/userDetails/user-detail.component';
import {UserEditComponent} from './admin/users/userEdit/user-edit.component';
import {FormsModule} from '@angular/forms';
import {RestaurantEditComponent} from './restaurants/restaurantEdit/restaurant-edit.component';
import {HttpClientModule} from '@angular/common/http';
import {MatProgressSpinnerModule, MatSpinner} from '@angular/material/progress-spinner';


const routes: Routes = [
  {path : '', component: RestaurantsComponent},
  {path : 'admin/users', component : UsersComponent},
  {path : 'restaurants',component: RestaurantsComponent},
  {path : '404', component : PageNotFoundComponent},
  {path : '**', redirectTo : '/404'}
];


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RestaurantsComponent,
    UsersComponent,
    PageNotFoundComponent,
    RestaurantDetailComponent,
    UserDetailComponent,
    UserEditComponent,
    RestaurantEditComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
