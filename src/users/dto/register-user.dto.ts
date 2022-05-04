import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  IsString,
  MinLength,
} from 'class-validator';
import { passwordMinLength, RegisterError } from '../enums';

export class RegisterUserDto {
  @IsEmail({}, { message: RegisterError.EMAIL, always: true })
  @IsNotEmpty({ message: RegisterError.EMAIL, always: true })
  email: string;

  @IsString({ message: RegisterError.FIRST_NAME, always: true })
  @IsNotEmpty({ message: RegisterError.FIRST_NAME, always: true })
  firstName: string;

  @IsString({ message: RegisterError.LAST_NAME, always: true })
  @IsNotEmpty({ message: RegisterError.LAST_NAME, always: true })
  lastName: string;

  @MinLength(passwordMinLength, {
    always: true,
    message: RegisterError.PASSWORD_LENGTH,
  })
  password: string;

  @IsNotEmpty({
    always: true,
    message: RegisterError.PASSWORD_ERROR,
  })
  repeatedPassword: string;

  @IsString({ message: RegisterError.ADDRESS, always: true })
  @IsNotEmpty({ message: RegisterError.ADDRESS, always: true })
  address: string;

  @IsString({ message: RegisterError.DISTRICT, always: true })
  @IsNotEmpty({ message: RegisterError.DISTRICT, always: true })
  district: string;

  @IsString({ message: RegisterError.DEPARTMENT, always: true })
  @IsNotEmpty({ message: RegisterError.DEPARTMENT, always: true })
  department: string;

  @IsNumberString({ message: RegisterError.CELLPHONE, always: true })
  @IsNotEmpty({ message: RegisterError.CELLPHONE, always: true })
  cellphone: string;
}
