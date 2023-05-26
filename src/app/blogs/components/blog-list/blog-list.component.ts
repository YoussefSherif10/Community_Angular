import {Component, OnInit} from '@angular/core';
import {Post} from "../../services/data";
import {BlogService} from "../../services/blog.service";

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  posts!: Post[];

  constructor(private blogService: BlogService) {
  }

  ngOnInit() {
    this.posts = this.blogService.posts;
  }
}
