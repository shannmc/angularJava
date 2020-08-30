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
  action: string;

  constructor(private dataService: DataService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.dataService.getUsers().subscribe(
      (next) => {
        this.users = next;
      }
    )

    console.log(this.dataService.getUsers());
    this.route.queryParams.subscribe(
      (params) => {
        const id = params['id'];
        this.action = params['action'];
        if (id) {
          this.selectedUser = this.users.find(user => {
            return user.id == +id;
          })
        }
      }
    )
  }

  setUser(id: number) {
    this.router.navigate(['/admin/users'], {queryParams: {id, action : 'view'}})
  }

  addUser() {
    this.selectedUser = new User();

    this.router.navigate(['/admin/users'], {queryParams: {action : 'add'}})

  }
}
