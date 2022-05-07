import { PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional } from 'class-validator';
import { CreateStoreDto } from './create-store.dto';

export class UpdateStoreDto extends PartialType(CreateStoreDto) {
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  name?: string;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  comercialName?: string;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  description?: string;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  ruc?: string;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  address?: string;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  phone?: string;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  cellphone?: string;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  web?: string;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  email?: string;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  whatsapp?: string;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  facebook?: string;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  instagram?: string;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  twitter?: string;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  logo?: string;
}
