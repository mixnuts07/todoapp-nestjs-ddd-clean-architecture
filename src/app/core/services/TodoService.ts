import { CreateTodoDto } from 'src/app/modules/todo/dto/CreateTodoDto';
import { Repository } from 'typeorm';
import { Todo } from '../entities/todo/Todo';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>,
  ) {}

  async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    const todo = new Todo();
    todo.title = createTodoDto.title;
    todo.description = createTodoDto.description;

    return await this.todoRepository.save(todo);
  }
}
