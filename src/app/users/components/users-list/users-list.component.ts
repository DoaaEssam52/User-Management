import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

import { User } from '../../models/user.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  usersList: User[] = [];

  constructor(private _users: UsersService) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this._users.getUsers().subscribe({
      next: ({ users }) => {
        this.usersList = users;
      },
    });
  }
}
