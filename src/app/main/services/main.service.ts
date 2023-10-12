import { Injectable } from '@angular/core';
import { ITodo } from '../interfaces/todo.interface';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  constructor() {}

  todos: ITodo[] = [
    {
      id: crypto.randomUUID(),
      title: 'Learn Angular Basics',
      dueDate: new Date(2023, 10, 12),
    },
    {
      id: crypto.randomUUID(),
      title: 'Create my first Angular App',
      dueDate: new Date(2023, 10, 12),
    },
  ];

  addNewTodo(todo: ITodo) {
    const newTodo = {
      id: crypto.randomUUID(),
      ...todo,
    };
    this.todos.push(newTodo);
  }

  deleteTodo(id: string) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
}
