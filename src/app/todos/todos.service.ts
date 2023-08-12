import { CreateTodoDto } from 'src/app/todos/dto/create-todo.dto';
import { Repository } from 'typeorm';
import { Todo } from './entities/Todo';
import { Inject, Injectable } from '@nestjs/common';
import { TODO_REPOSITORY } from './const/constants';

@Injectable()
export class TodoService {
  constructor(
    @Inject(TODO_REPOSITORY)
    private readonly todoRepository: Repository<Todo>,
  ) {}

  async save(createTodoDto: CreateTodoDto): Promise<Todo> {
    const todo = new Todo();
    todo.title = createTodoDto.title;
    todo.description = createTodoDto.description;

    return await this.todoRepository.save(todo);
  }
}
