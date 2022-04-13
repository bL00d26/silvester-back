import { Document } from 'mongoose';
export interface User extends Document {
  type: number;
  profileImage: string;
  email: string;
  firstName: string;
  lastName: string;
  confirmedEmail: boolean;
  password: string;
  address: string;
  district: string;
  department: string;
  cellphone: string;
  active: boolean;
}
