import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Collection } from 'src/enums';
import {
  ChangePasswordDto,
  EditUserDto,
  LoginUserDto,
  RegisterUserDto,
} from './dto';
import { User } from './models';

@Injectable()
export class UsersService {
  private readonly logger = new Logger('UsersService');
  constructor(
    @InjectModel(Collection.USER)
    private readonly userModel: Model<User>,
  ) {}

  async registerUser(registerUserDto: RegisterUserDto) {
    try {
      const newUser = await new this.userModel(registerUserDto).save();
      return newUser;
    } catch (error) {
      this.logger.log(error);
      return null;
    }
  }
  async loginUser(loginUserDto: LoginUserDto) {
    try {
      const user = await this.userModel.findOne(loginUserDto);
      if (!user || !user.active) return null;
      return user;
    } catch (error) {
      this.logger.log(error);
      return null;
    }
  }
  async editUser(id: string, editUserDto: EditUserDto) {
    try {
      const user = await this.userModel.findByIdAndUpdate(id, editUserDto, {
        new: true,
      });
      if (!user) return null;
      return user;
    } catch (error) {
      this.logger.log(error);
      return null;
    }
  }
  async setActiveUser(userId: string, status: boolean) {
    try {
      const user = await this.userModel.findByIdAndUpdate(
        userId,
        { active: status },
        {
          new: true,
        },
      );
      if (!user) return null;
      return user;
    } catch (error) {
      this.logger.log(error);
      return null;
    }
  }
  async confirmUserEmail(userId: string) {
    try {
      const user = await this.userModel.findByIdAndUpdate(
        userId,
        { confirmedEmail: true },
        {
          new: true,
        },
      );
      if (!user) return null;
      return user;
    } catch (error) {
      this.logger.log(error);
      return null;
    }
  }

  async updateUserProfileImg(userId: string) {
    try {
      const newUser = await this.userModel.findByIdAndUpdate(
        userId,
        {
          profileImage: `/users/profile/${userId}`,
        },
        { new: true },
      );
      return newUser;
    } catch (error) {
      this.logger.log(error);
      return null;
    }
  }

  async updateUserPassword(changePasswordDto: ChangePasswordDto) {
    try {
      const newUser = await this.userModel.findOneAndUpdate(
        {
          password: changePasswordDto.oldPassword,
          _id: changePasswordDto.userId,
        },
        { password: changePasswordDto.newPassword },
        { new: true },
      );
      return newUser;
    } catch (error) {
      return null;
    }
  }
}
