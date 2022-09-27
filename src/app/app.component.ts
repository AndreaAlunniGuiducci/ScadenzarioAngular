import { Component } from '@angular/core';
import { AuthService } from './shared/service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  constructor(public authService: AuthService) {}

  user = JSON.stringify(this.authService.userData);
  title = 'ScadenzarioAngular';

  date = new Date();
  day = this.date.getDate();
  month = this.date.getMonth();
  year = this.date.getFullYear();

  today = `${this.day}/${this.month + 1}/${this.year}`;

  isLogged() {
    let link = this.authService.isLoggedIn ? 'home' : 'login';
    return link;
  }
  getUser() {
    if (this.authService.isLoggedIn) {
      let currentUser = JSON.parse(localStorage.getItem('user')!);
      return currentUser.email;
    } else {
      return 'OSPITE';
    }
  }
}
