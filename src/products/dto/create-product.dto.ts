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

  @IsNotEmpty()
  @IsString()
  species:string;

  @IsNotEmpty()
  @IsString()
  birthDate:string;

  @IsNotEmpty()
  @IsNumber()
  weight:number;

  @IsNotEmpty()
  @IsString()
  gender:string;
  
  // @IsNotEmpty()
  // @IsString()
  // image: string;

  @IsNotEmpty()
  @IsString()
  category: string;
}
