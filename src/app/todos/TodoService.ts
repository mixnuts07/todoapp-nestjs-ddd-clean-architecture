import { CreateTodoDto } from 'src/app/todos/dto/create-todo.dto';
import { Repository } from 'typeorm';
import { Todo } from './entities/Todo';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ITodoRepository } from './TodoRepository';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: ITodoRepository,
  ) {}

  async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    const todo = new Todo();
    todo.title = createTodoDto.title;
    todo.description = createTodoDto.description;

    return await this.todoRepository.save(todo);
  }
}
