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
  getUsers(): Observable<{ users: User[] }> {
    return this._httpClient.get<{ users: User[] }>(ENDPOINTS.getUsers);
  }
}
