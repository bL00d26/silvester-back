import {
  Body,
  Controller,
  HttpStatus,
  Post,
  Res,
  UnauthorizedException,
} from '@nestjs/common';
import { Response } from 'express';
import { LoginUserDto } from 'src/users/dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  async signIn(@Body() loginUserDto: LoginUserDto, @Res() res: Response) {
    const { user, accessToken } = await this.authService.login(loginUserDto);
    if (!user)
      throw new UnauthorizedException('Email y/o contraseña incorrectos');
    res.status(HttpStatus.OK).json({
      success: true,
      user,
      accessToken,
    });
  }
}
