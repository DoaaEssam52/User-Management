import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ActivatedRoute, Params, Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
})
export class EditUserComponent implements OnInit, OnDestroy {
  userId = null;
  userInitialData: any;

  successMessage = '';
  errorMessage = '';

  userForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    age: new FormControl('', [
      Validators.required,
      Validators.min(16),
      Validators.max(60),
    ]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern('^01[0125][0-9]{8}$'),
    ]),
    birthDate: new FormControl('', [Validators.required]),
  });

  idSubscription: Subscription = new Subscription();
  getUserSubscription: Subscription = new Subscription();
  editUserSubscription: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _users: UsersService
  ) {}

  ngOnInit(): void {
    this.idSubscription = this.route.params.subscribe((params: Params) => {
      this.userId = params['id'];

      this.getUser();
    });
  }

  getUser(): void {
    this.getUserSubscription = this._users.getUsers().subscribe(({ users }) => {
      this.userInitialData = users.find((user) => user.id == this.userId);

      this.userForm.patchValue(this.userInitialData);
    });
  }

  submit(): void {
    this.editUserSubscription = this._users
      .editUser(this.userId, this.userForm.value)
      .subscribe({
        next: () => {
          this.successMessage = 'user is updated successfully';

          setTimeout(() => {
            this.router.navigate(['/users', 'list']);
          }, 3000);
        },
        error: ({ error }) => {
          this.errorMessage = error.message;
        },
      });
  }

  ngOnDestroy(): void {
    this.idSubscription.unsubscribe();
    this.getUserSubscription.unsubscribe();
    this.editUserSubscription.unsubscribe();
  }
}
