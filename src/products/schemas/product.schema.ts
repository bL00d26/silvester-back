import { Schema } from 'mongoose';

export const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
      default: 0,
    },
    previewImages: [
      {
        type: String,
        required: true,
        default: 'default',
      },
    ],
    species:{
      type: String,
      required: true,
    },
  birthDate:{
      type: String,
      required: true,
    },
  weight:{
    type: Number,
    required: true,
  },
  gender:{
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  { timestamps: true },
);

productSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject.__v;
  },
});
