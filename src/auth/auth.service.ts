import { Injectable } from '@nestjs/common';
import { UserDTO } from './dto/user.dto';

@Injectable()
export class AuthService {
  userDetail: UserDTO = {
    username: 'Aman',
    email: 'howesjen.01@gmail.com',
    password: '12345',
    job: 'Frontend',
    role: 'User',
  };
  regitser(creditials: UserDTO) {
    return creditials;
  }

  login() {
    return 'login';
  }
}
