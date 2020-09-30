import { Injectable } from '@nestjs/common';
import { Todo } from './models/todo.model';

@Injectable()
export class AppService {
  todos: Todo[] = [{ title: 'Todo 1' }, { title: 'Todo 2' }];

  getTodos() {
    return this.todos;
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }
}
