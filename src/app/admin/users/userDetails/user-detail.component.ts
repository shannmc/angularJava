import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../../model/User";
import {DataService} from "../../../data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
})
export class UserDetailComponent implements OnInit {

  @Input()
  user: User;

  constructor(private dataService: DataService,
              private router: Router ) {
  }

  ngOnInit() {
  }

  editUser(){
    this.router.navigate(['admin', 'users'], {queryParams: {id: this.user.id, action: 'edit'}})
  }

}
