import { Document } from 'mongoose';
import { ProductCategoryType } from '../types/product-categories.types';
export interface Product extends Document {
  name: string;
  description: string;
  price: number;
  image: string;
  category: ProductCategoryType;
  createdAt: Date;
  updatedAt: Date;
}
