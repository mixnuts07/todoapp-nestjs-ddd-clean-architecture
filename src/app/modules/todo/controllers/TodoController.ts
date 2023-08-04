import { Controller, Delete, Get, Post } from '@nestjs/common';

@Controller('todo')
export class TodoController {
  @Get()
  async getAllTodo(): Promise<string> {
    // 登録したTODOリストを全て取得する
    return 'Hello Nest World';
  }
  @Post()
  registerTodo(): string {
    // TODOを1つ登録する
    return 'post your todo';
  }
  @Delete()
  deleteTodo(): string {
    return 'delete you todo';
  }
}
