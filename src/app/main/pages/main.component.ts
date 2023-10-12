import { Component } from '@angular/core';
import { ITodo } from '../interfaces/todo.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  public todos: ITodo[] = [
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
}
