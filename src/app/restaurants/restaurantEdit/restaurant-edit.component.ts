import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {Restaurant} from '../../model/Restaurant';
import {DataService} from '../../data.service';
import {Category} from '../../model/Category';

@Component({
  selector: 'app-restaurant-edit',
  templateUrl: './restaurant-edit.component.html',
  styleUrls: ['./restaurant-edit.component.css']

})
export class RestaurantEditComponent implements OnInit {

  @Input()
  restaurant: Restaurant;

  @Input()
  category: Category;

  @Output()
  dataChangedEvent = new EventEmitter();
  formRestaurant: Restaurant;
  formCategory: Category;
  message: string;
  nameIsValid = false;

  constructor(private dataService: DataService,
              private router: Router) { }
  ngOnInit() {
    this.initializeForm()
  }

  initializeForm() {
    this.formRestaurant = Object.assign({}, this.restaurant);
    this.formCategory = Object.assign({}, this.category);

    this.checkIfNameIsValid();
  }

  checkIfNameIsValid() {
    if(this.formRestaurant.name) {
      this.nameIsValid = this.formRestaurant.name.trim().length > 0;
    } else {
      this.nameIsValid = false;
    }
  }

  // onCheckboxChange(e) {
  //   if (e.target.checked) {
  //     this.formRestaurant.category = e.target.name;
  //   }
  // }

  onCheckboxChange(e) {
    if (e.target.checked) {
      this.formCategory.name = e.target.name;
    }
  }

  onSubmit() {
    this.message = 'Saving...';
    console.log('Restaurant Category:');
    console.log(this.formRestaurant.category);


    this.dataService.addCategory(this.formCategory).subscribe(
      (category: Category) => {
        console.log('HEY SHANNON ITS WORKING?:');
        console.log(category);
      }
    );

    if(this.restaurant.id == null) {
      this.dataService.addRestaurant(this.formRestaurant).subscribe(
        (restaurant: Restaurant) => {
          this.dataChangedEvent.emit();
          this.router.navigate(['restaurants'], {queryParams: {action: 'view', id: restaurant.id}})
        },
        (error) => {
          this.message = 'Something went wrong.  The restaurant was not added.'
        }
      )
    } else {
      this.dataService.updateRestaurant(this.formRestaurant).subscribe(
        (restaurant) => {
          this.dataChangedEvent.emit();
          this.router.navigate(['restaurants'], {queryParams: {action: 'view', id: restaurant.id}});
        },
        (error) => {
          this.message = 'Error during update';
        }
      )
    }

  }
}
