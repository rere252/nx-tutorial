import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Todo } from './models/todo.model';
import { TodoService } from './service/todo.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'rjd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  public todos: Todo[] = [{ title: 'Todo 1' }, { title: 'Todo 2' }];

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.fetchTodos().subscribe((todos) => (this.todos = todos));
  }

  public addTodo() {
    this.todoService
      .addTodo({
        title: `New todo ${Math.floor(Math.random() * 1000)}`,
      })
      .pipe(switchMap(() => this.fetchTodos()))
      .subscribe((todos) => (this.todos = todos));
  }

  private fetchTodos() {
    return this.todoService.getTodos();
  }
}
