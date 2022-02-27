import { Injectable } from '@nestjs/common';
import { Exclude } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { BeforeInsert, Column } from 'typeorm';
import { AbstrackEntity } from './abstrack-entity';

@Injectable()
export class UserEntity extends AbstrackEntity {
  @Column()
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  username: string;

  @IsNotEmpty()
  @IsEmail()
  @Column()
  @IsString()
  @MinLength(4)
  email: string;

  @Column()
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  job: string;

  @Column()
  @IsString()
  @IsNotEmpty()
  role: string;

  @Column()
  @IsString()
  @IsNotEmpty()
  @Exclude()
  password: string;
}
