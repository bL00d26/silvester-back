import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  MinLength,
  IsOptional,
  IsArray,
  IsNumberString,
  ArrayMinSize,
} from 'class-validator';
import { dniMinLength, passwordMinLength, RegisterError } from '../enums';

export class RegisterUserDto {
  @IsNumber()
  @IsNotEmpty({ message: RegisterError.EMPTY_FIRST_NAME, always: true })
  type: number;

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

  @IsString({ message: RegisterError.LAST_NAME, always: true })
  @IsNotEmpty({ message: RegisterError.EMPTY_LAST_NAME, always: true })
  address: string;

  @IsString({ message: RegisterError.LAST_NAME, always: true })
  @IsNotEmpty({ message: RegisterError.EMPTY_LAST_NAME, always: true })
  district: string;

  @IsString({ message: RegisterError.LAST_NAME, always: true })
  @IsNotEmpty({ message: RegisterError.EMPTY_LAST_NAME, always: true })
  department: string;

  @IsString({ message: RegisterError.LAST_NAME, always: true })
  @IsNotEmpty({ message: RegisterError.EMPTY_LAST_NAME, always: true })
  cellphone: string;
}
