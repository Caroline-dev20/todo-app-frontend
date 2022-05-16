import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../models/todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {

  id!: string;
  todo!: Todo;

  constructor(private route: ActivatedRoute, private router: Router, private service: TodoService) { }

  ngOnInit(): void {
    this.getTodo();
  }

  private getTodo() {
    this.route.params.subscribe(params => this.id = params['id']);
    this.service.getTodoById(this.id).subscribe(todo => this.todo = todo);
  }

  onSubmit() {
    const data = {
      title: this.todo.title,
      description: this.todo.description
    };
    if(this.todo) {
      this.service.updateTodo(this.todo.id, data).subscribe(() => {
        window.alert("Updated ToDo!"),
        this.router.navigateByUrl('/todo-list') 
      });
    }
  }

  cancel() {
    this.router.navigateByUrl('/todo-list');
  }

}
