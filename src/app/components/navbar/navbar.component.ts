import { Component } from '@angular/core';
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private userService: UserService, private router: Router) {
  }
  logout() {
    this.userService.logout()
    this.router.navigate(['/login']);
  }
}
