import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoDetailComponent } from './todo-detail.component';



@NgModule({
  declarations: [TodoDetailComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [TodoDetailComponent]
})
export class TodoDetailModule { }
