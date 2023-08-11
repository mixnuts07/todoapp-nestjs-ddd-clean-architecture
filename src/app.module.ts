import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoController } from './app/modules/todo/controllers/TodoController';
import { TodoService } from './app/core/services/TodoService';
import { ToDoRepository } from './app/core/respositories/TodoRepository';

@Module({
  imports: [],
  controllers: [AppController, TodoController],
  providers: [AppService, TodoService, ToDoRepository],
})
export class AppModule {}
