import { Module } from '@nestjs/common';
import { TodoController } from './TodoController';
import { TodoService } from './TodoService';
import { ToDoRepository } from './TodoRepository';

@Module({
  controllers: [TodoController],
  providers: [TodoService, ToDoRepository],
})
export class TodoModules {}
