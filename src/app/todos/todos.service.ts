import { todoDto } from 'src/app/todos/dto/todo.dto';
import { Repository } from 'typeorm';
import { Todo } from './entities/Todo';
import { Inject, Injectable } from '@nestjs/common';
import { TODO_REPOSITORY } from '../database/const/constants';

@Injectable()
export class TodoService {
  constructor(
    @Inject(TODO_REPOSITORY)
    private readonly todoRepository: Repository<Todo>,
  ) {}

  async save(todoDto: todoDto): Promise<Todo> {
    const todo = new Todo();
    todo.title = todoDto.title;
    todo.description = todoDto.description;

    return await this.todoRepository.save(todo);
  }

  async findOneBy(id: number): Promise<Todo> {
    return await this.todoRepository.findOneBy({ id: id });
  }

  async findAll(): Promise<Todo[]> {
    return await this.todoRepository.find();
  }

  async update(id: number, todoDto: todoDto) {
    const todo = new Todo();
    todo.title = todoDto.title;
    todo.description = todoDto.description;
    return await this.todoRepository.update(id, todo);
  }

  async delete(id: number) {
    return await this.todoRepository.delete(id);
  }
}
