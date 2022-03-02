import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { LoginDTO, RegisterDTO } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity) private userRepo: Repository<UserEntity>,
  ) {}

  async regitser(creditials: RegisterDTO) {
    try {
      // const findUser = this.userRepo.findOne({ email: creditials.email });
      // if (!findUser) {

      const user = await this.userRepo.create(creditials);
      await user.save();
      return user;
      // } else {
      //   console.log('user found');

      //   throw new ConflictException('Email conflict');
      // }
    } catch (e) {
      if (e.code === '23505') {
        throw new ConflictException('Email has already been taken');
      }
      throw new InternalServerErrorException();
    }
  }

  async login({ email, password }: LoginDTO) {
    try {
      const user = await this.userRepo.findOne({ where: { email } });
      const isValid = await user.comparePassword(password);
      return isValid;
    } catch (e) {
      console.log(e);
      throw new UnauthorizedException('Invalid creditials');
    }
  }
}

// async login({ email, password }: LoginDTO) {
//   try {
//     const user = await this.userRepo.findOne({ where: { email } });
//     const isValid = await user.comparePassword(password);
//     if (!isValid) {
//       throw new UnauthorizedException('Invalid creditials');
//     }
//     return user;
//   } catch (e) {
//     throw new UnauthorizedException('Invalid creditials');
//   }
// }
