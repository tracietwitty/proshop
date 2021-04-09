import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

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

userSchema.methods.matchPassword = async function (enteredPassword) {
  // use bcrypt to compare plaintext pword to the encrypted version in db:
  return await bcrypt.compare(enteredPassword, this.password);
};

// 2. creates a model from the schema above:
const User = mongoose.model('User', userSchema);

// 3. export!
export default User;
