import mongoose, { model, Schema } from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/second_brain")

const userSchema = new Schema({
    username: { type: String, unique: true },
    password: { type: String }

})

export const UserModel = model("User", userSchema);

