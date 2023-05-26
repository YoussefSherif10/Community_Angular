import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {BlogListComponent} from './components/blog-list/blog-list.component';
import {BlogService} from "./services/blog.service";
import {MatCardModule} from "@angular/material/card";
import {BlogComponent} from './components/blog/blog.component';

const routes: Routes = [
  {path: '', component: BlogListComponent},
  {path: ':blog_id', component: BlogComponent}
]

@NgModule({
  declarations: [
    BlogListComponent,
    BlogComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
  ],
  providers: [
    BlogService
  ]
})
export class BlogsModule {
}
