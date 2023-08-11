import { Injectable } from '@nestjs/common';
import { Todo } from '../entities/todo/Todo';
import { Repository, getRepository } from 'typeorm';

export interface ITodoRepository {
  save(todo: Todo): Promise<Todo>;
}

@Injectable()
export class ToDoRepository implements ITodoRepository {
  private readonly repository: Repository<Todo>;

  constructor() {
    this.repository = getRepository(Todo);
  }

  async save(todo: Todo): Promise<Todo> {
    return await this.repository.save(todo);
  }
}
