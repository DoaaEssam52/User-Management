import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

import { User } from '../../models/user.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  allUsers: User[] = [];

  limit = 20;
  totalNumberOfPages = 1;
  currentPage = 1;
  pages: number[] = [];

  isLoading = true;

  constructor(private _users: UsersService) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this._users.getUsers().subscribe({
      next: ({ total, users }) => {
        this.totalNumberOfPages = Math.ceil(total / this.limit);
        this.pages = Array(this.totalNumberOfPages)
          .fill(0)
          .map((_, i) => i);

        this._users.getUsers(total).subscribe({
          next: ({ users }) => {
            this.allUsers = users;

            this.isLoading = false;
          },
        });
      },
      error: ({ error }) => (this.isLoading = false),
    });
  }

  nextPage(): void {
    if (this.currentPage + 1 <= this.totalNumberOfPages) {
      this.currentPage++;
    }
  }

  prevPage(): void {
    if (this.currentPage - 1 >= 1) {
      this.currentPage--;
    }
  }

  setCurrentPage(pageIndex: number): void {
    this.currentPage = pageIndex;
  }

  handleLimitChange(): void {
    this.currentPage = 1;
  }
}
