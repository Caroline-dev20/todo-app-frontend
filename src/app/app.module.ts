import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewTodoModule } from './new-todo/new-todo.module';
import { TodoListModule } from './todo-list/todo-list/todo-list.module';
import { AppRoutingModule } from './app-routing.module';
import { TodoDetailModule } from './todo-detail/todo-detail.module';
import { NavBarComponent } from './nav-bar/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    NewTodoModule,
    TodoListModule,
    TodoDetailModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
