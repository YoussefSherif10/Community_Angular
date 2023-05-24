import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "../components/login/login.component";
import {NotFoundComponent} from "../components/not-found/not-found.component";
import {ForumsModule} from "../forums/forums.module";
import {ChatListComponent} from "../components/chat-list/chat-list.component";
import {ChatComponent} from "../components/chat/chat.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'users', component: ChatListComponent, outlet: 'chat'},
  {path: 'users/:username', component: ChatComponent, outlet: 'chat'},
  {path: '', redirectTo: '/forums', pathMatch: "full"},
  {path: '**', component: NotFoundComponent}
]

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    ForumsModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule { }
