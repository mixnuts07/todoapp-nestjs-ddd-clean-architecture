import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { TodoService } from 'src/app/todos/todos.service';
import { todoDto } from './dto/todo.dto';
import { Todo } from 'src/app/todos/entities/Todo';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}
  // https://docs.nestjs.com/controllers#request-object
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Todo | null> {
    return this.todoService.findOneBy(id);
  }

  @Get()
  async findAll(): Promise<Todo[]> {
    return this.todoService.findAll();
  }

  @Post()
  async create(@Body() TodoDto: todoDto): Promise<Todo | void> {
    return this.todoService.save(TodoDto);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() todoDto: todoDto) {
    return this.todoService.update(id, todoDto);
  }
}
