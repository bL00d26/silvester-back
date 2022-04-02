import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  constructor() {}

  // async getUserByEmail(loginUserDto: LoginUserDto) {
  //   // const { email, password } = loginUserDto;
  //   const user = await this.userModel
  //     .findOne(loginUserDto)
  //     .populate(Field.SCHOOL, {}, Collection.SCHOOL);
  //   if (!user) {
  //     throw new UnauthorizedException('Credenciales Incorrectas');
  //   }

  //   const classrooms = await this.classroomsService.getClassrooms(user._id);
  //   if (!classrooms) {
  //     throw new UnauthorizedException('Error al Iniciar Sesión');
  //   }
  //   return { user, classrooms, school: user.school };
  // }
}
