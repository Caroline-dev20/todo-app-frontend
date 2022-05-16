import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TodoListComponent } from './todo-list.component';
import { TodoListModule } from './todo-list.module';
import { RouterTestingModule } from '@angular/router/testing';
import { TodoService } from 'src/app/services/todo.service';

describe('TodoListComponent', () => {
  let service = jasmine.createSpyObj('TodoService', ['deleteTodo']);
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoListComponent ],
      imports: [ 
        TodoListModule,
        HttpClientTestingModule,
        RouterTestingModule 
      ],
      providers: [{ provide: TodoService, useValue: service}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
