import { Schema } from 'mongoose';
import { Collection } from 'src/enums';

export const userSchema = new Schema({
  type: {
    type: Number,
    required: true,
  },
  profileImage: {
    type: String,
    required: false,
    default: 'default',
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  confirmedEmail: {
    type: Boolean,
    required: false,
    default: false,
  },
  password: {
    type: String,
    required: true,
  },
  birthday: {
    type: String,
    required: true,
  },
  dni: {
    type: String,
    unique: true,
    required: true,
  },
});

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject.__v;
    delete returnedObject.password;
  },
});
