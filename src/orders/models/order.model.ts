import { Document } from 'mongoose';
import { User } from 'src/users/models';
import { OrderStatusType, OrderPaymentType } from '../types/orders.types';
import { OrderProduct } from './order-product.model';
export interface Order extends Document {
  products: OrderProduct[];
  totalAmount: number;
  user: string | User;
  type: OrderPaymentType;
  discount?: number;
  status: OrderStatusType;
}
