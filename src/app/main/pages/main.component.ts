import { Component } from '@angular/core';
import { ITodo } from '../interfaces/todo.interface';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  constructor(private MainService: MainService) {}

  get todos(): ITodo[] {
    return [...this.MainService.todos];
  }

  public addNewTodo(newTodo: ITodo): void {
    this.MainService.addNewTodo(newTodo);
  }

  public deleteTodo(id: string): void {
    this.MainService.deleteTodo(id);
  }
}
