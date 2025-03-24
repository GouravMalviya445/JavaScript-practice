import mongoose, { mongo } from "mongoose";

interface IUser {
  username: string;
  name: string;
  password: string;
}

const UserSchema: mongoose.Schema<IUser> = new mongoose.Schema({
  username: { type: String, required: [true, "username is required"], lowercase: true, trim: true },
  name: { type: String, required: true },
  password: {
    type: String,
    
  }
});
