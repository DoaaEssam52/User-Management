import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { AuthHandleFormsService } from '../../services/auth-handle-forms.service';
import { HandleFormsService } from 'src/app/services/handle-forms.service';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', './../../styles/auth.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;

  errorMessage: string = '';

  constructor(
    private _authHandleForms: AuthHandleFormsService,
    public _handleForms: HandleFormsService,
    private _login: LoginService,
    private router: Router
  ) {
    this.loginForm = this._authHandleForms.loginForm();
  }

  login(): void {
    this.loginForm.markAllAsTouched();

    if (this.loginForm.valid) {
      this._login.login(this.loginForm.value).subscribe({
        next: (res) => {
          localStorage.setItem('token', res.token);
          localStorage.setItem('userData', JSON.stringify(res));

          this.router.navigate(['users']);
        },
        error: (error) => (this.errorMessage = error.error.message),
      });
    }
  }
}
