import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { NewTodoComponent } from './new-todo.component';
import { NewTodoModule } from './new-todo.module';

describe('NewTodoComponent', () => {

  let component: NewTodoComponent;
  let fixture: ComponentFixture<NewTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTodoComponent ],
      imports: [ 
        NewTodoModule,
        RouterTestingModule,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
