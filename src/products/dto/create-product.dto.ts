import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  // @IsNotEmpty()
  // @IsString()
  // image: string;

  @IsNotEmpty()
  @IsString()
  category: string;
}
