import { PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { CreateProductDto } from './create-product.dto';

export class UpdateProductDto extends PartialType(CreateProductDto) {
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  name?: string;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  description?: string;

  @IsNotEmpty()
  @IsNumber()
  @IsOptional()
  price?: number;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  stock?: number;

  // @IsNotEmpty()
  // @IsString()
  // @IsOptional()
  // image?: string;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  category?: string;
}
