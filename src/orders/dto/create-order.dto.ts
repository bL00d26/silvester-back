import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { OrderStatusType, OrderPaymentType } from '../types/orders.types';

export class CreateOrderDto {
  @IsNotEmpty()
  @IsNumber()
  totalAmount: number;

  @IsNotEmpty()
  @IsString()
  user: string;

  @IsNotEmpty()
  @IsString()
  type: OrderPaymentType;

  @IsNotEmpty()
  @IsString()
  status: OrderStatusType;
}
