import {Component, OnInit} from '@angular/core';
import {Post} from "../../services/data";
import {BlogService} from "../../services/blog.service";
import {ActivatedRoute} from "@angular/router";

interface Tile {
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  post!: Post;
  post_id!: string;
  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1},
    {text: 'One', cols: 3, rows: 1},
    {text: 'Two', cols: 1, rows: 2},
    {text: 'Three', cols: 1, rows: 1},
    {text: 'Four', cols: 2, rows: 1},
  ];

  constructor(private blogService: BlogService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    // @ts-ignore
    this.post_id = this.route.snapshot.paramMap.get("blog_id");
    this.post = this.blogService.post(parseInt(this.post_id));
  }
}
