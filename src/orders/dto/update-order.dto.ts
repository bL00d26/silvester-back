import { PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional } from 'class-validator';
import { OrderType, OrderStatusType } from '../types/orders.types';
import { CreateOrderDto } from './create-order.dto';

export class UpdateOrderDto extends PartialType(CreateOrderDto) {
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  totalAmount?: number;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  user?: string;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  type?: OrderType;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  status?: OrderStatusType;
}
