import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list.component';
import { TodoCardComponent } from '../todo-card/todo-card.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TodoListComponent, 
    TodoCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [TodoListComponent]
})
export class TodoListModule { }
