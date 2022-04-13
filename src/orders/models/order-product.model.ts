import { Document } from 'mongoose';
import { Product } from 'src/products/models';
import { Order } from './order.model';
export interface OrderProduct extends Document {
  product: string | Product;
  order: string | Order;
}
