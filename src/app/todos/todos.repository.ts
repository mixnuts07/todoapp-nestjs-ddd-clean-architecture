import { Injectable } from '@nestjs/common';
import { Todo } from './entities/Todo';
import { Repository } from 'typeorm';

@Injectable()
export class TodoRepository {
  private readonly repository: Repository<Todo>;

  async save(todo: Todo): Promise<Todo> {
    return await this.repository.save(todo);
  }
}
