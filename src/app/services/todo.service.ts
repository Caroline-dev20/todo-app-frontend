import { Injectable } from '@angular/core';
import { Todo, Todos } from '../models/todo';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const APIURL = 'http://localhost:3000/api/v1/todos/';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Todos>{
    return this.http.get<Todos>(`${APIURL}`);
  }

  getTodoById(id: string): Observable<any>{
    return this.http.get<Todo>(`${APIURL}${id}`);
  }

  createTodo(data: any): Observable<any> {
    return this.http.post<Todo>(`${APIURL}`, data);
  }

  updateTodo(id: string, data: any): Observable<any> {
    return this.http.put(`${APIURL}${id}`, data);
  }

  deleteTodo(id?: string): Observable<any> {
    return this.http.delete<Todo>(`${APIURL}${id}`);
  }
}
