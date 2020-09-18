import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../model/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: Array<User>;
  selectedUser: User;
  action: string;
  message = 'Loading data please wait';
  loadingData = true;

  constructor(private dataService: DataService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.loadData()
  }

  loadData() {
    this.dataService.getUsers().subscribe(
      (next) => {
        this.users = next;
        this.loadingData = false;
        this.route.queryParams.subscribe(
          (params) => {
            const id = params.id;
            this.action = params.action;
            if (id) {
              this.selectedUser = this.users.find(user => {
                return user.id === +id;
              })
            }
          }
        )
      },
      (error) => {
        this.message = 'an error has occurred';
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
