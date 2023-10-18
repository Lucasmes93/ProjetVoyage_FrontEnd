import {Component, OnInit} from '@angular/core';
import {User} from "../../interface/user.interface";
import {UserService} from '../user.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  user: User[] = [];

  constructor(private userService: UserService) {

  }

  ngOnInit(): void {
    this.userService.getUser().subscribe(users => {
      this.user = users;
    })
  }
}
