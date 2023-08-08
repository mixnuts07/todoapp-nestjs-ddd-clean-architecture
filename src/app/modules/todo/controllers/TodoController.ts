import { Controller, Delete, Get, Post } from '@nestjs/common';
import { TodoService } from 'src/app/core/services/TodoService';
import { CreateTodoDto } from '../dto/CreateTodoDto';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  async getAllTodo(): Promise<string> {
    // 登録したTODOリストを全て取得する
    return 'Hello Nest World';
  }

  @Post()
  registerTodo(): void {
    // TODOを1つ登録する
    this.todoService.create(CreateTodoDto);
  }

  @Delete()
  deleteTodo(): string {
    return 'delete you todo';
  }
}
