import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { LoginRequest } from '../models/login-request.model';
import { LoginResponse } from '../models/login-response.model';

import { ENDPOINTS } from 'src/app/constants/endpoints';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private _httpClient: HttpClient) {}

  // CALLING ENDPOINTS
  login(loginForm: LoginRequest): Observable<LoginResponse> {
    const url = ENDPOINTS.login;

    return this._httpClient.post<LoginResponse>(url, loginForm);
  }
}
