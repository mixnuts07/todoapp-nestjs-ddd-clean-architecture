import { Body, Controller, Post } from '@nestjs/common';
import { TodoService } from 'src/app/core/services/TodoService';
import { CreateTodoDto } from '../dto/CreateTodoDto';
import { Todo } from 'src/app/core/entities/todo/Todo';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  async create(@Body() createTodoDto: CreateTodoDto): Promise<Todo> {
    return this.todoService.create(createTodoDto);
  }
}
