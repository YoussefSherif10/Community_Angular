import {Component, OnInit} from '@angular/core';
import {ForumsService} from "../../services/forums.service";
import {Post, Thread} from "../../services/data";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-thread-details',
  templateUrl: './thread-details.component.html',
  styleUrls: ['./thread-details.component.css']
})
export class ThreadDetailsComponent implements OnInit {
  posts!: Post[];
  thread!: Thread;
  forum_alias!: string;
  thread_id!: number;

  constructor(private forumsService: ForumsService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    // @ts-ignore
    this.forum_alias = this.route.snapshot.paramMap.get("forum_alias");
    // @ts-ignore
    this.thread_id = this.route.snapshot.paramMap.get("thread_id");
    // @ts-ignore
    this.thread = this.forumsService.thread(this.forum_alias, parseInt(this.thread_id));

    if(!this.thread)
      this.router.navigate(['/not-found']);

    this.posts = this.thread.posts;

  }
}
