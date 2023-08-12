import { Injectable } from '@nestjs/common';
import { Todo } from './entities/Todo';
import { Repository } from 'typeorm';
import { todoDataSource } from 'src/app/todos/database.providers';

export interface ITodoRepository {
  save(todo: Todo): Promise<Todo>;
}

@Injectable()
export class ToDoRepository implements ITodoRepository {
  private readonly repository: Repository<Todo>;

  constructor() {
    this.repository = todoDataSource.getRepository(Todo);
  }

  async save(todo: Todo): Promise<Todo> {
    return await this.repository.save(todo);
  }
}
