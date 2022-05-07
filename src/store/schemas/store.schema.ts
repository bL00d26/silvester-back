import { Schema } from 'mongoose';

export const storeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    comercialName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    ruc: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    cellphone: {
      type: String,
      required: true,
    },
    web: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    whatsapp: {
      type: String,
      required: true,
    },
    facebook: {
      type: String,
      required: true,
    },
    instagram: {
      type: String,
      required: true,
    },
    twitter: {
      type: String,
      required: true,
    },
    logo: {
      type: String,
      required: true,
      default: 'default',
    },
    yapeQrCode: {
      type: String,
      required: true,
      default: 'default',
    },
    plinQrCode: {
      type: String,
      required: true,
      default: 'default',
    },
    bcpAccount: {
      type: String,
      required: true,
    },
    bcpInterbankAccount: {
      type: String,
      required: true,
    },
    plinAccount: {
      type: String,
      required: true,
    },
    plinInterbankAccount: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

storeSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject.__v;
  },
});
