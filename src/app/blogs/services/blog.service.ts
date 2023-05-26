import { Injectable } from '@angular/core';
import {data, Post} from "./data";

@Injectable()
export class BlogService {
  private _data: Post[] = data;

  get posts(): Post[] {
    return this._data;
  }

  post(id: number): Post {
    return <Post>this._data.find(p => p.post_id === id);
  }
}
