import { Schema } from 'mongoose';
import { Collection } from 'src/enums';

export const orderProductSchema = new Schema(
  {
    order: {
      type: Schema.Types.ObjectId,
      ref: Collection.ORDER,
      required: true,
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: Collection.PRODUCT,
      required: true,
    },
  },
  { timestamps: true },
);

orderProductSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject.__v;
  },
});
