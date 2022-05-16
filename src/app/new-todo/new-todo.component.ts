import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Todo } from '../models/todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.css']
})
export class NewTodoComponent implements OnInit {

  newTodoForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private service: TodoService) { }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm() {
    this.newTodoForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    })
  }

  onSubmit() {
    if(this.newTodoForm.valid) {
      const newTodo = this.newTodoForm.getRawValue() as Todo;
      this.service.createTodo(newTodo).subscribe(() => {
        this.router.navigateByUrl('/todo-list'),
        window.alert("New ToDo registered!")
      });
    }
  }
}
