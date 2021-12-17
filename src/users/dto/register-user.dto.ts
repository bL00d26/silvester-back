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
  @IsString({ message: RegisterError.FIRST_NAME, always: true })
  @IsNotEmpty({ message: RegisterError.EMPTY_FIRST_NAME, always: true })
  firstName: string;

  @IsString({ message: RegisterError.LAST_NAME, always: true })
  @IsNotEmpty({ message: RegisterError.EMPTY_LAST_NAME, always: true })
  lastName: string;

  @IsString({ message: RegisterError.SCHOOL, always: true })
  @IsNotEmpty({ message: RegisterError.EMPTY_REGISTER_CODE, always: true })
  registerCode: string;

  @IsEmail({}, { message: RegisterError.EMAIL, always: true })
  @IsNotEmpty({ message: RegisterError.EMPTY_EMAIL, always: true })
  email: string;

  @IsNumber({}, { message: RegisterError.TYPE, always: true })
  type: number;

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

  @IsString({ message: RegisterError.BIRTHDAY, always: true })
  @IsNotEmpty({ message: RegisterError.BIRTHDAY, always: true })
  birthday: string;

  @IsOptional()
  @IsArray({ message: RegisterError.EMPTY_LEVELS, always: true })
  @ArrayMinSize(1, { message: RegisterError.EMPTY_LEVELS })
  @IsNotEmpty({ message: RegisterError.EMPTY_LEVELS, always: true })
  @IsString({ message: RegisterError.EMPTY_LEVELS, always: true, each: true })
  levels?: string[];

  @IsOptional()
  @IsNumberString({}, { message: RegisterError.DNI, always: true })
  @MinLength(dniMinLength, { message: RegisterError.DNI, always: true })
  @IsNotEmpty({ message: RegisterError.EMPTY_DNI, always: true })
  dni?: string;

  @IsOptional()
  @IsEmail({}, { message: 'Email del padre inválido' })
  parentEmail?: string;
}
