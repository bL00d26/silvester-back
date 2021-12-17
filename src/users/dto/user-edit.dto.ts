import { IsNotEmpty, IsOptional } from 'class-validator';
import { UserDtoError } from '../enums/dto-errors.enum';

export class EditUserDto {
  @IsOptional()
  @IsNotEmpty({ message: UserDtoError.FIRST_NAME, always: true })
  firstName?: string;

  @IsOptional()
  @IsNotEmpty({ message: UserDtoError.LAST_NAME, always: true })
  lastName?: string;

  @IsOptional()
  @IsNotEmpty({ message: UserDtoError.EMAIL, always: true })
  email?: string;

  @IsOptional()
  @IsNotEmpty({ message: UserDtoError.PROFILE_IMAGE, always: true })
  profileImage?: string;

  @IsOptional()
  @IsNotEmpty({ message: UserDtoError.BIRTHDAY, always: true })
  birthday?: string;

  @IsOptional()
  @IsNotEmpty({ message: UserDtoError.DNI, always: true })
  dni?: string;

  @IsOptional()
  @IsNotEmpty({ message: UserDtoError.LEVELS, always: true })
  levels?: string[];

  @IsOptional()
  @IsNotEmpty({ message: UserDtoError.PARENT_EMAIL, always: true })
  parentEmail?: string;
}
