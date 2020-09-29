import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../models/todo.model';

@Injectable({ providedIn: 'root' })
export class TodoService {
  constructor(private http: HttpClient) {}

  getTodos() {
    return this.http.get<Todo[]>('/api/todos');
  }

  addTodo(todo: Todo) {
    return this.http.post('/api/addTodo', todo);
  }
}
