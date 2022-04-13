import { IsNotEmpty, IsString } from 'class-validator';
import { OrderStatusType, OrderType } from '../types/orders.types';

export class CreateOrderDto {
  @IsNotEmpty()
  @IsString()
  totalAmount: number;

  @IsNotEmpty()
  @IsString()
  user: string;

  @IsNotEmpty()
  @IsString()
  type: OrderType;

  @IsNotEmpty()
  @IsString()
  status: OrderStatusType;
}
