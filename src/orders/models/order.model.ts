import { Document } from 'mongoose';
import { User } from 'src/users/models';
import { OrderStatusType, OrderType } from '../types/orders.types';
export interface Order extends Document {
  totalAmount: number;
  user: string | User;
  type: OrderType;
  status: OrderStatusType;
}
