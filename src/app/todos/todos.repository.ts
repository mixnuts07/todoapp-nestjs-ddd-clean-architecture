import { Injectable } from '@nestjs/common';
import { Todo } from './entities/Todo';
import { Repository } from 'typeorm';
import { todoDataSource } from 'src/app/todos/database.providers';

@Injectable()
export class ToDoRepository {
  private readonly repository: Repository<Todo>;

  constructor() {
    this.repository = todoDataSource.getRepository(Todo);
  }

  async save(todo: Todo): Promise<Todo> {
    return await this.repository.save(todo);
  }
}
