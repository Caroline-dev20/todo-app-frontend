import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { TodoService } from './todo.service';
import { todoDTOFixture } from 'src/testing/fixtures/todo-dto.fixture';
import { todoFixture } from 'src/testing/fixtures/todo.fixture';

describe('TodoService', () => {
  let service: TodoService;
  let httpMock: HttpTestingController;
  let todoMock = todoDTOFixture();
  let createdTodo = todoFixture();
  const todosMock = [
    todoFixture({id: '1', title: 'test1'}),
    todoFixture({id: '2', title: 'test2'}),
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(TodoService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should find all todos', () => {
    service.getAll().subscribe((todos: any) => {
      expect(todos.length).toBe(todosMock.length);
      expect(todos).toEqual(todosMock);
    });

    const req = httpMock.expectOne((req) => req.url.endsWith('/todos/'));

    expect(req.request.method).toBe('GET');

    req.flush(todosMock);
  });

  it('should find a todo by id', () => {
    const todoMock = todosMock[0];
    const todoId = todoMock.id;

    service.getTodoById(todoId).subscribe((todo) => {
      expect(todo).toEqual(todoMock);
    });

    const req = httpMock.expectOne((req) => {
      return req.url.endsWith(`/todos/${todoId}`);
    });

    expect(req.request.method).toBe('GET');

    req.flush(todoMock);
  });

  it('should crate a todo', () => {
    service.createTodo(todoMock).subscribe((createdTodo) => {
      expect(createdTodo.id).toBeTruthy;
      expect(createdTodo.title).toBe(todoMock.title);
      expect(createdTodo.description).toBe(todoMock.description);
    });

    const req = httpMock.expectOne((req) => req.url.endsWith('/todos/'));
    expect(req.request.method).toBe('POST');

    req.flush(createdTodo);
  });

  it('should update the todo title', () => {
    const todoMock = todosMock[0];
    todoMock.title = 'Test3';

    service.updateTodo(todoMock.id, todoMock).subscribe((todo) => {
      expect(todo).toEqual(todoMock);
    });

    const req = httpMock.expectOne((req) => {
      return req.url.endsWith(`/todos/${todoMock.id}`);
    });

    expect(req.request.method).toBe('PUT');

    req.flush(todoMock);
  });

  it('should delete todo', () => {
    const todoMock = todosMock[1];
    const todoId = todoMock.id;

    service.deleteTodo(todoId).subscribe((todos:any) => {
      expect(todos.id).toBe('2');
    });

    const req = httpMock.expectOne((req) => {
      return req.url.endsWith(`/todos/${todoMock.id}`);
    });

    expect(req.request.method).toBe('DELETE');

    req.flush(todoMock);
  });

  afterEach(() => {
    httpMock.verify();
  });
});
