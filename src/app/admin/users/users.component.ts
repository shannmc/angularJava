import { Component, OnInit } from '@angular/core';
import {DataService} from "../../data.service";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../model/User";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: Array<User>;
  selectedUser: User;

  constructor(private dataService: DataService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.users = this.dataService.users;
    console.log(this.dataService.users);
    this.route.queryParams.subscribe(
      (params) => {
        const id = params['id'];
        if (id) {
          this.selectedUser = this.users.find(user => {
            return user.id == +id;
          })
        }
      }
    )
  }

  setUser(id: number) {
    this.router.navigate(['/admin/users'], {queryParams: {id}})
  }
}
