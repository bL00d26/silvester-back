import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateStoreDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  comercialName: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  ruc: string;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsString()
  phone: string;

  @IsNotEmpty()
  @IsString()
  cellphone: string;

  @IsNotEmpty()
  @IsString()
  web: string;

  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  whatsapp: string;

  @IsNotEmpty()
  @IsString()
  facebook: string;

  @IsNotEmpty()
  @IsString()
  instagram: string;

  @IsNotEmpty()
  @IsString()
  twitter: string;

  @IsNotEmpty()
  @IsString()
  bcpAccount: string;

  @IsNotEmpty()
  @IsString()
  bcpInterbankAccount: string;

  @IsNotEmpty()
  @IsString()
  plinAccount: string;

  @IsNotEmpty()
  @IsString()
  plinInterbankAccount: string;
}
