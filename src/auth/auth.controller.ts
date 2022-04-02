import {
  Body,
  Controller,
  HttpStatus,
  InternalServerErrorException,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { LoginUserDto } from 'src/users/dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  async signIn(
    @Req() req: Request,
    @Body() loginUserDto: LoginUserDto,
    @Res() res: Response,
  ) {
    const {
      user,
      classrooms,
      school,
      accessToken,
    } = await this.authService.login(loginUserDto);
    if (!user) {
      throw new InternalServerErrorException('Error al Iniciar Sesión');
    }
    res.status(HttpStatus.OK).json({
      success: true,
      user,
      classrooms,
      school,
      accessToken,
    });
  }
}
