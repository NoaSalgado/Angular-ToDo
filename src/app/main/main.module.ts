import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './pages/main.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoAddComponent } from './components/todo-add/todo-add.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MainComponent, TodoListComponent, TodoAddComponent],
  imports: [CommonModule, FormsModule],
  exports: [MainComponent],
})
export class MainModule {}
