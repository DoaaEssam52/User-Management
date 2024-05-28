import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isLoggedIn = localStorage.getItem('token');

  constructor() {
    console.log('isLoggedIn', this.isLoggedIn);
  }
}
