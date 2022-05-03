import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Res,
  Body,
  Param,
  HttpStatus,
  UseInterceptors,
  UploadedFile,
  UseGuards,
  HttpException,
} from '@nestjs/common';
import { Response, Request } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { join } from 'path';
import { imageFileFilter } from 'src/utils';
import { ChangePasswordDto, EditUserDto, RegisterUserDto } from './dto';
import { UsersService } from './users.service';
import { EmailService } from 'src/email/email.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly emailService: EmailService,
  ) {}

  @Post('/register')
  async registerUser(
    @Res() res: Response,
    @Body() registerUserDto: RegisterUserDto,
  ) {
    const user = await this.usersService.registerUser(registerUserDto);
    if (!user)
      throw new HttpException(
        'Error al registrar usuario',
        HttpStatus.BAD_REQUEST,
      );
    // this.emailService.sendConfirmationEmail(user); //TODO: Enviar correo de confirmación
    return res.status(HttpStatus.OK).json({ success: true, user });
  }
  @Put('/edit/:id')
  async editUser(
    @Res() res: Response,
    @Param('id') id: string,
    @Body() editUserDto: EditUserDto,
  ) {
    const user = await this.usersService.editUser(id, editUserDto);
    if (!user)
      throw new HttpException(
        'Error al editar usuario',
        HttpStatus.BAD_REQUEST,
      );
    return res.status(HttpStatus.OK).json({ success: true, user });
  }

  @Get('/deactivate/:id')
  async deactivateUser(@Res() res: Response, @Param('id') userId: string) {
    const user = await this.usersService.setActiveUser(userId, false);
    if (!user)
      throw new HttpException(
        'Error al desactivar usuario',
        HttpStatus.BAD_REQUEST,
      );
    return res.status(HttpStatus.OK).json({ success: true, user });
  }

  @Get('/confirm-email/:id&:password')
  async confirmEmail(
    @Res() res: Response,
    @Param('id') userId: string,
    @Param('password') userPassword: string,
  ) {
    const user = await this.usersService.confirmUserEmail(userId, userPassword);
    if (!user)
      throw new HttpException(
        'Error al confirmar email',
        HttpStatus.BAD_REQUEST,
      );
    return res.status(HttpStatus.OK).send('Email Confirmado');
  }

  @Get('/activate/:id')
  async activateUser(@Res() res: Response, @Param('id') userId: string) {
    const user = await this.usersService.setActiveUser(userId, true);
    if (!user)
      throw new HttpException(
        'Error al activar usuario',
        HttpStatus.BAD_REQUEST,
      );
    return res.status(HttpStatus.OK).json({ success: true, user });
  }
  @Put('/edit/password')
  async changePassword(
    @Res() res: Response,
    @Body() changePasswordDto: ChangePasswordDto,
  ) {
    const newPassword = await this.usersService.updateUserPassword(
      changePasswordDto,
    );
    if (!newPassword)
      throw new HttpException(
        'Error al cambiar la contraseña',
        HttpStatus.BAD_REQUEST,
      );
    res.status(HttpStatus.OK).json({
      success: true,
    });
  }
  @Post('/profile/:id')
  @UseInterceptors(
    FileInterceptor('profileImage', {
      storage: diskStorage({
        destination: './src/uploads/profileImages/',
        filename: (req, file, cb) => {
          cb(null, `${req.params.id}.png`);
        },
      }),
      fileFilter: imageFileFilter,
      limits: { files: 1, fileSize: 10000000 },
    }),
  )
  async setProfileImage(
    @Res() res: Response,
    @UploadedFile() file,
    @Param('id') userId: string,
  ) {
    const user = await this.usersService.updateUserProfileImg(userId);
    if (!user)
      throw new HttpException(
        'Error al actualizar foto usuario',
        HttpStatus.BAD_REQUEST,
      );
    res.status(HttpStatus.OK).json({
      success: true,
      user,
      profileImage: file.path,
    });
  }

  @Get('/profile/:id')
  getProfileImg(@Res() res: Response, @Param('id') profileId: string) {
    try {
      res.sendFile(
        join(process.cwd(), `/src/uploads/profileImages/${profileId}.png`),
        function (err) {
          res.status(HttpStatus.NOT_FOUND).end();
        },
      );
    } catch (error) {
      res.sendFile(null);
    }
  }
  @Get('/test-email')
  async testEmail(@Res() res: Response) {
    try {
      const res1 = await this.emailService.sendUserOrderDetail();
      res.status(HttpStatus.OK).json({
        res1,
      });
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        error: 'Error sending email',
      });
    }
  }
}
