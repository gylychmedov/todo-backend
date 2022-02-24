import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TodoEntity } from 'src/entities/todo.entity';
import { Repository } from 'typeorm';
import { TodoDTO } from './dto/todo.dto';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(TodoEntity) private todoRepo: Repository<TodoEntity>,
  ) {}
  findOne() {
    return 'find one';
  }

  getAll() {
    try {
      const todoList = this.todoRepo.find();
      return todoList;
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async create(todo: TodoDTO) {
    try {
      const createTodo = this.todoRepo.create(todo);
      await createTodo.save();
      return createTodo;
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  update(toDo: TodoDTO) {
    return 'update';
  }

  delete(id: number) {
    try {
      this.todoRepo.delete({ id: id });
      return { message: 'success' };
    } catch (error) {
      throw new NotFoundException();
    }
  }
}
