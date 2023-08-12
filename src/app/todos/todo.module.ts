import { Module } from '@nestjs/common';
import { TodoController } from './todos.controller';
import { TodoService } from './todos.service';
import { TodoRepository } from './todos.repository';
import { DatabaseModule } from './database.module';
import { todoProviders } from './todo.providers';

@Module({
  imports: [DatabaseModule],
  providers: [...todoProviders, TodoRepository, TodoService],
  controllers: [TodoController],
})
export class TodoModule {}
