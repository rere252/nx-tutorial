import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { Todo } from '@rjd/data';
import { TodoService } from './service/todo.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'rjd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  public todos: Todo[];

  constructor(
    private todoService: TodoService,
    private cdr: ChangeDetectorRef
  ) {
    this.todos = [];
  }

  ngOnInit() {
    this.fetchTodos().subscribe((todos) => this.displayTodos(todos));
  }

  public addTodo() {
    this.todoService
      .addTodo({
        title: `New todo ${Math.floor(Math.random() * 1000)}`,
      })
      .pipe(switchMap(() => this.fetchTodos()))
      .subscribe((todos) => this.displayTodos(todos));
  }

  private fetchTodos() {
    return this.todoService.getTodos();
  }

  private displayTodos(todos: Todo[]) {
    this.todos = todos;
    this.cdr.detectChanges();
  }
}
