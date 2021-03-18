import mongoose from 'mongoose';

// 1. creates user schema:
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// 2. creates a model from the schema above:
const User = mongoose.model('User', userSchema);

// 3. export!
export default User;
