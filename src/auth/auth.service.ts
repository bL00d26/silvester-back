import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginUserDto } from 'src/users/dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(loginUserDto: LoginUserDto) {
    const { user, classrooms, school } = await this.userService.getUserByEmail(
      loginUserDto,
    );
    if (user && user.password === loginUserDto.password) {
      const accessToken = this.jwtService.sign({ user });
      return { user, classrooms, school, accessToken };
    }

    throw new UnauthorizedException('Email y/o contraseña incorrectos');
  }
}
