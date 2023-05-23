import {NgModule} from '@angular/core';
import {ForumsListComponent} from './components/forums-list/forums-list.component';
import {RouterModule, Routes} from "@angular/router";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatTableModule} from "@angular/material/table";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {CommonModule, TitleCasePipe} from "@angular/common";

const routes: Routes = [
  {path: 'forums', component: ForumsListComponent}
]

@NgModule({
  declarations: [
    ForumsListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
  ]
})
export class ForumsModule {
}
