import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './pages/main.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

@NgModule({
  declarations: [MainComponent, TodoListComponent],
  imports: [CommonModule],
  exports: [MainComponent],
})
export class MainModule {}
