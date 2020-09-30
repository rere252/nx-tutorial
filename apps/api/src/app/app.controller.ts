import { Body, Controller, Get, Post } from '@nestjs/common';

import { AppService } from './app.service';
import { Todo } from './models/todo.model';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('todos')
  getTodos() {
    return this.appService.getTodos();
  }

  @Post('addTodo')
  addTodo(@Body() todo: Todo) {
    return this.appService.addTodo(todo);
  }
}
