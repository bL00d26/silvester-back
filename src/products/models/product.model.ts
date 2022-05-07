import { Document } from 'mongoose';
import { ProductCategoryType } from '../types/product-categories.types';
export interface Product extends Document {
  name: string;
  description: string;
  price: number;
  previewImages: string[];
  stock: number;
  category: ProductCategoryType;
  active: boolean;
  createdAt: Date;
  updatedAt?: Date;
}
