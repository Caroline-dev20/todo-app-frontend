import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewTodoComponent } from './new-todo/new-todo.component';
import { TodoListComponent } from './todo-list/todo-list/todo-list.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';

const routes: Routes = [ 
  {
    path: '', 
    redirectTo: 'todo-list', 
    pathMatch: 'full'
  },
  {
    path: 'new-todo',
    component: NewTodoComponent
  },
  {
    path: 'todo-list',
    component: TodoListComponent
  },
  {
    path: 'todo-details/:id',
    component: TodoDetailComponent
  }
]

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
