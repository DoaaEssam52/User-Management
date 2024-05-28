import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users.routing.module';
import { HttpClientModule } from '@angular/common/http';

import { UsersListComponent } from './components/users-list/users-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [UsersListComponent],
  imports: [CommonModule, UsersRoutingModule, HttpClientModule, SharedModule],
})
export class UsersModule {}
