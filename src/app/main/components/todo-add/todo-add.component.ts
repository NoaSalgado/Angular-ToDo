import { Component, EventEmitter, Output } from '@angular/core';
import { ITodo } from '../../interfaces/todo.interface';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css'],
})
export class TodoAddComponent {
  @Output()
  public onNewTodo: EventEmitter<ITodo> = new EventEmitter();

  public newTodo: ITodo = {
    title: '',
    dueDate: null,
  };

  public emitNewTodo(): void {
    if (this.newTodo.title.length === 0) return;
    this.onNewTodo.emit(this.newTodo);
    this.newTodo = {
      title: '',
      dueDate: null,
    };
  }
}
