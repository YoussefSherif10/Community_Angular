import {NgModule} from '@angular/core';
import {ForumsListComponent} from './components/forums-list/forums-list.component';
import {RouterModule, Routes} from "@angular/router";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatTableModule} from "@angular/material/table";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {CommonModule} from "@angular/common";
import { ForumDetailsComponent } from './components/forum-details/forum-details.component';
import {ForumsService} from "./services/forums.service";

const routes: Routes = [
  {path: 'forums', component: ForumsListComponent},
  {path: 'forums/:forum_alias', component: ForumDetailsComponent}
]

@NgModule({
  declarations: [
    ForumsListComponent,
    ForumDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
  ],
  providers: [ForumsService]
})
export class ForumsModule {
}
