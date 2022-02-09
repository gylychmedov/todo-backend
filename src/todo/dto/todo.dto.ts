import { IsNotEmpty, IsString, MinLength } from 'class-validator';
import { EProgress } from '../enum/progress.enum';

export class TodoDTO {
  @MinLength(2)
  @IsString()
  @IsNotEmpty()
  title: string;

  @MinLength(2)
  @IsString()
  @IsNotEmpty()
  text: string;

  @MinLength(2)
  @IsString()
  @IsNotEmpty()
  progress: EProgress;

  @MinLength(2)
  @IsString()
  @IsNotEmpty()
  category: string;
}
