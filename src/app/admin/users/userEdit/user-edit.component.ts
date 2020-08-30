import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../../model/User";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
})
export class UserEditComponent implements OnInit {

  @Input()
  user: User;
  message: string;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log("we need to save user")
  }
}
