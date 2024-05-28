import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  userData: any = localStorage.getItem('userData')
    ? JSON.parse(localStorage.getItem('userData') as string)
    : {};

  constructor(private router: Router) {}

  logout() {
    localStorage.removeItem('userData');
    localStorage.removeItem('token');

    this.router.navigate(['login'])
  }
}
