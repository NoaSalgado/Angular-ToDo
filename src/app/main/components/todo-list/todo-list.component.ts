import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITodo } from '../../interfaces/todo.interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  @Input()
  public todos: ITodo[] = [];

  @Output()
  public onDeleteTodo: EventEmitter<string> = new EventEmitter();

  public emitTodoId(todo: ITodo) {
    this.onDeleteTodo.emit(todo.id);
  }
}
