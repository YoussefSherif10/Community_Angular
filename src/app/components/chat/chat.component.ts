import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {ChatBotService} from "../../services/chat-bot.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  user!: string;
  guest!: string;
  messages: any[] = [];
  msg: string = '';

  constructor(private route: ActivatedRoute,
              private userService: UserService,
              private chatService: ChatBotService,
              private router: Router) {
  }

  ngOnInit() {
    this.guest = this.route.snapshot.paramMap.get("username") || '';
    this.user = this.userService.getUser();
  }

  send() {
    this.addMessage(this.user, this.msg);
    this.reply();
    this.msg = '';
  }

  private addMessage(author: string, message: string) {
    this.messages.push({
      author: author,
      message: message,
    });
  }

  private reply() {
    setTimeout(() => {
      this.addMessage(this.guest, this.chatService.respond());
    }, 2500);
  }

  exit() {
    this.router.navigate([{outlets: {chat: null}}])
  }
}
