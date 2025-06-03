import { Schema, model, models } from "mongoose";

export enum UserRole {
    User = "user",
    Admin = "admin",
}

const UserSchema = new Schema({
    name: String,
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: Object.values(UserRole), default: UserRole.User },
    image: { type: String, default: "" },
});

export const User = models.User || model("User", UserSchema);


export type UserDoc = {
    _id: string;
    name: string;
    email: string;
    password: string;
    image: string;
    role: UserRole;
};
