import { Module } from '@nestjs/common';
import { TodoController } from './todos.controller';
import { TodoService } from './todos.service';
import { ToDoRepository } from './todos.repository';

@Module({
  controllers: [TodoController],
  providers: [TodoService, ToDoRepository],
})
export class TodoModules {}
