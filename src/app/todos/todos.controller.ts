import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TodoService } from 'src/app/todos/todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Todo } from 'src/app/todos/entities/Todo';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Todo | null> {
    return this.todoService.findOneBy(id);
  }

  @Get()
  async findAll(): Promise<Todo[]> {
    return this.todoService.findAll();
  }

  @Post()
  async create(@Body() createTodoDto: CreateTodoDto): Promise<Todo | void> {
    return this.todoService.save(createTodoDto);
  }
}
