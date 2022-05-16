import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewTodoComponent } from './new-todo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [NewTodoComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [NewTodoComponent]
})
export class NewTodoModule { }
