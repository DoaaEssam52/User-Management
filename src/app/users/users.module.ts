import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users.routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';

@NgModule({
  declarations: [UsersComponent, UsersListComponent, EditUserComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
})
export class UsersModule {}
