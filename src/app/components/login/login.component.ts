import {Component} from '@angular/core';
import {UserService} from "../../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  hide: boolean = true;
  return!: string | null;
  error: boolean = false;

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) {
  }

  login() {
    if (this.username && this.password) {
      this.userService.login(this.username);
      this.return = this.route.snapshot.queryParamMap.get("return");
      // @ts-ignore
      this.router.navigateByUrl(this.return);
    }
    else
      this.error = true;
  }
}
