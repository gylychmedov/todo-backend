import { IsNotEmpty, IsString, MinLength } from 'class-validator';
import { EProgress } from 'src/todo/enum/progress.enum';
import { Column, Entity } from 'typeorm';
import { AbstrackEntity } from './abstrack-entity';

@Entity('todo')
export class TodoEntity extends AbstrackEntity {
  @Column({ default: '' })
  @MinLength(2)
  @IsString()
  @IsNotEmpty()
  title: string;

  @Column({ default: '' })
  @MinLength(2)
  @IsString()
  @IsNotEmpty()
  text: string;

  @Column({ default: '' })
  @MinLength(2)
  @IsString()
  @IsNotEmpty()
  progress: EProgress;

  @Column({ default: '' })
  @MinLength(2)
  @IsString()
  @IsNotEmpty()
  category: string;
}
