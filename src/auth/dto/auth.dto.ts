import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class LoginDTO {
  @IsNotEmpty()
  @IsEmail()
  @IsString()
  @MinLength(4)
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}

export class RegisterDTO extends LoginDTO {
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  username: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  job: string;

  @IsString()
  @IsNotEmpty()
  role: string;
}
