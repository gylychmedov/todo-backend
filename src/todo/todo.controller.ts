import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { TodoDTO } from './dto/todo.dto';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get('/all')
  getAll() {
    return this.todoService.getAll();
  }

  @Post('/add')
  addTodo(@Body(ValidationPipe) todo: TodoDTO) {
    return this.todoService.create(todo);
  }

  @Post('/delete/:id')
  deleteTodo(@Param('id') id: number) {
    return this.todoService.delete(id);
  }
}
