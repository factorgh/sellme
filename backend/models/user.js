import mongoose from 'mongoose';
import bcrypt from ""

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    resetToken: { type: String },
    isAdmin: { type: Boolean, default: false, required: true },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  //1)Check if password has been modified 
  if (!this.isModified("password")) return next();

  ///2)Encrypt the password
  this.password = await bcrypt(this.password, 12)
  next();
})

const User = mongoose.model('User', userSchema);
export default User;