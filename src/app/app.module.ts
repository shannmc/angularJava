import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { UsersComponent } from './admin/users/users.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {RestaurantDetailComponent } from './restaurants/restaurantDetails/restaurant-detail.component';
import { UserDetailComponent } from './admin/users/userDetails/user-detail.component';
import { UserEditComponent } from './admin/users/userEdit/user-edit.component';
import { FormsModule } from '@angular/forms';
import { RestaurantEditComponent } from './restaurants/restaurantEdit/restaurant-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule, MatSpinner } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import {SortDirective} from './directives/sort-directive';
import {Sort} from './directives/sort';
import {TableFilterPipe} from './directives/table-filter.pipe';
import {RestaurantsFilterComponent} from "./restaurants/restaurantFilter/restaurants-filter.component";


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
    SortDirective,
    TableFilterPipe,
    RestaurantsFilterComponent,
  ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        HttpClientModule,
        FormsModule,
        MatProgressSpinnerModule,
        MatSortModule,

    ],
  providers: [Sort],
  bootstrap: [AppComponent]
})
export class AppModule { }
