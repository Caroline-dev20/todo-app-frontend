import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todos } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todos = [];

  constructor(private service: TodoService, private router: Router) { }

  ngOnInit(): void {
    this.listTodos();
  }

  private listTodos() {
    this.service.getAll().subscribe((todos) => {
      this.todos = todos;
    });
  }

  deleteTodo(id: string) {
    this.service.deleteTodo(id).subscribe(() => {
      window.alert('Deleted ToDo.'),
      this.service.getAll().subscribe(todos => this.todos = todos);
    });
  }

}
