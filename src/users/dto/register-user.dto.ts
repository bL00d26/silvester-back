import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  MinLength,
} from 'class-validator';
import { passwordMinLength, RegisterError } from '../enums';

export class RegisterUserDto {
  @IsEmail({}, { message: RegisterError.EMAIL, always: true })
  @IsNotEmpty({ message: RegisterError.EMPTY_EMAIL, always: true })
  email: string;

  @IsString({ message: RegisterError.FIRST_NAME, always: true })
  @IsNotEmpty({ message: RegisterError.EMPTY_FIRST_NAME, always: true })
  firstName: string;

  @IsString({ message: RegisterError.LAST_NAME, always: true })
  @IsNotEmpty({ message: RegisterError.EMPTY_LAST_NAME, always: true })
  lastName: string;

  @MinLength(passwordMinLength, {
    always: true,
    message: RegisterError.PASSWORD_LENGTH,
  })
  password: string;

  @MinLength(passwordMinLength, {
    always: true,
    message: RegisterError.PASSWORD_LENGTH,
  })
  repeatedPassword: string;

  @IsString({ message: RegisterError.ADDRESS, always: true })
  @IsNotEmpty({ message: RegisterError.EMPTY_ADDRESS, always: true })
  address: string;

  @IsString({ message: RegisterError.DISTRICT, always: true })
  @IsNotEmpty({ message: RegisterError.EMPTY_DISTRICT, always: true })
  district: string;

  @IsString({ message: RegisterError.DEPARTMENT, always: true })
  @IsNotEmpty({ message: RegisterError.EMPTY_DEPARTMENT, always: true })
  department: string;

  @IsString({ message: RegisterError.CELLPHONE, always: true })
  @IsNotEmpty({ message: RegisterError.EMPTY_CELLPHONE, always: true })
  cellphone: string;
}
