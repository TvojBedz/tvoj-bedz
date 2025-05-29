import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().email({ message: "Invalid email" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

export const registerSchema = loginSchema.extend({
    name: z.string().min(2, { message: "Name is required" }),
});

type LoginValues = z.infer<typeof loginSchema>;
type RegisterValues = z.infer<typeof registerSchema>;
export type AuthValues = LoginValues | RegisterValues;