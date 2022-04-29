import { Schema } from 'mongoose';

export const userSchema = new Schema({
  type: {
    type: Number,
    required: true,
    default: 2,
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
  address: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  cellphone: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    required: true,
    default: true,
  },
});

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject.__v;
    delete returnedObject.password;
  },
});
