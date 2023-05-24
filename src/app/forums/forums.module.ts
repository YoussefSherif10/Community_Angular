import {NgModule} from '@angular/core';
import {ForumsListComponent} from './components/forums-list/forums-list.component';
import {RouterModule, Routes} from "@angular/router";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatTableModule} from "@angular/material/table";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {CommonModule} from "@angular/common";
import {ForumDetailsComponent} from './components/forum-details/forum-details.component';
import {ForumsService} from "./services/forums.service";
import {ThreadDetailsComponent} from './components/thread-details/thread-details.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";

const routes: Routes = [
  {path: 'forums', component: ForumsListComponent},
  {path: 'forums/:forum_alias', component: ForumDetailsComponent},
  {path: 'forums/:forum_alias/:thread_id', component: ThreadDetailsComponent}
]

@NgModule({
  declarations: [
    ForumsListComponent,
    ForumDetailsComponent,
    ThreadDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [ForumsService]
})
export class ForumsModule {
}
