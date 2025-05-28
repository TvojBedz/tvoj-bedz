import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    name: String,
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // hashed
});

export const User = models.User || model("User", UserSchema);


export type UserDoc = {
    _id: string;
    name: string;
    email: string;
    password: string;
};
