import { Body, Controller, Post } from '@nestjs/common';
import { TodoService } from 'src/app/todos/todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Todo } from 'src/app/todos/entities/Todo';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  async create(@Body() createTodoDto: CreateTodoDto): Promise<Todo | void> {
    return this.todoService.create(createTodoDto);
  }
}
