import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '../models/user.model';

import { ENDPOINTS } from 'src/app/constants/endpoints';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private _httpClient: HttpClient) {}

  // CALLING ENDPOINTS
  getUsers(limit: number = 30): Observable<{ total: number; users: User[] }> {
    return this._httpClient.get<{ total: number; users: User[] }>(
      ENDPOINTS.getUsers,
      { params: { limit } }
    );
  }

  editUser(id: number | null, body: any): Observable<User> {
    return this._httpClient.put<User>(ENDPOINTS.getUsers + '/' + id, body);
  }
}
