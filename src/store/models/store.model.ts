import { Document } from 'mongoose';
export interface Store extends Document {
  name: string;
  comercialName: string;
  description: string;
  ruc: string;
  address: string;
  phone: string;
  cellphone: string;
  web: string;
  email: string;
  whatsapp: string;
  facebook: string;
  instagram: string;
  twitter: string;
  logo: string;
  yapeQrCode: string;
  plinQrCode: string;
  bcpAccount: string;
  bcpInterbankAccount: string;
  plinAccount: string;
  plinInterbankAccount: string;
}
