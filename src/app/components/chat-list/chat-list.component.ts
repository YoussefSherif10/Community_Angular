import {Component, OnInit} from '@angular/core';
import {ForumsService} from "../../forums/services/forums.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css'],
  providers: [ForumsService]
})
export class ChatListComponent implements OnInit {
  users!: string[];
  constructor(private forumsService: ForumsService, private router: Router) {
  }

  ngOnInit() {
    this.users = this.forumsService.users;
  }

  exit() {
    this.router.navigate([{outlets: {chat: null}}])
  }
}
