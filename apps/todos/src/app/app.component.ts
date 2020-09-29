import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Todo } from './models/todo.model';

@Component({
  selector: 'rjd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  public todos: Todo[] = [{ title: 'Todo 1' }, { title: 'Todo 2' }];

  public addTodo() {
    this.todos.push({
      title: `New todo ${Math.floor(Math.random() * 1000)}`,
    });
  }
}
