import { z } from "zod";

export const RegisterSchema = z
  .object({
    email: z
      .string()
      .nonempty("Email is required")
      .email("Invalid email address"),
    name: z
      .string()
      .nonempty("Name is required")
      .regex(/^[a-zA-Z\s]+$/, "Name can only contain letters"), 
    password: z
      .string()
      .min(6, "Password must be at least 6 characters long")
      .regex(/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$/, "Password must be alphanumeric"), 
    confirmPassword: z
      .string()
      .min(6, "Confirm Password must be at least 6 characters long"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords must match",
  });

  
export const LoginSchema = z.object({
    email: z.string().email({
        message: "Please enter a valid email address"
    }),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters long"
})
})