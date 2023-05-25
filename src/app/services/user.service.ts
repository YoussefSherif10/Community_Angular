import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  username = localStorage.getItem("username") || 'youssef';
  guest: boolean = (!this.username);

  isGuest(): boolean {
    return this.guest;
  }

  getUser(): string {
    return this.username;
  }

  login(newUsername: string) {
    this.username = newUsername;
    this.guest = false;
    localStorage.setItem("username", this.username);
  }

  logout() {
    this.username = '';
    this.guest = true;
    localStorage.setItem('username', '');
  }
}
