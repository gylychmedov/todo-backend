import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDTO } from './dto/user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  login() {
    return 'Login';
  }

  @Post('register')
  register(@Body(ValidationPipe) creditials: UserDTO) {
    return this.authService.regitser(creditials);
  }
}
