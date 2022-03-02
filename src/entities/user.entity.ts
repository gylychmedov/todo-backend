import { classToPlain, Exclude } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { BeforeInsert, Column, Entity } from 'typeorm';
import { AbstrackEntity } from './abstrack-entity';
import bcrypt from 'bcryptjs';

@Entity('users')
export class UserEntity extends AbstrackEntity {
  @Column()
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  username: string;

  @Column({ unique: true })
  @IsNotEmpty()
  @IsEmail()
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

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  async comparePassword(attemt: string) {
    return await bcrypt.compare(attemt, this.password);
  }

  toJSON() {
    return classToPlain(this);
  }
}
