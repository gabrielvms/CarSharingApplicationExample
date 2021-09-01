import { Component } from '@angular/core';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rideApp';
  isLogged: boolean = false;
  user: User = { username: '', phone: '' }

  getUser() {
    return this.user;
  }

  setUser(user: User) {
    this.user = user;
  }

  getLogged() {
    return this.isLogged;
  }

  setLogged(isLogged: boolean) {
    this.isLogged = isLogged;
  }
}
