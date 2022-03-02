import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDTO, LoginDTO } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  login(@Body(ValidationPipe) creditials: LoginDTO) {
    return this.authService.login(creditials);
  }

  @Post('/register')
  register(@Body(ValidationPipe) creditials: RegisterDTO) {
    return this.authService.regitser(creditials);
  }
}
