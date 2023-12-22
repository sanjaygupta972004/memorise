import {z} from 'zod';

export const userAuthSchema = z.object({
   fullName: z
   .string({required_error: "Full name is required"})
   .min(3, {message: "Full name must be at least 3 characters long"})
   .max(50, {message: "Full name must not be more than 50 characters long"})
   .trim(),

   email:z
   .string({required_error: "Email is required"})
   .email({message: "Invalid email address"})
   .min(5, {message: "Email must be at least 5 characters long"})
   .max(40, {message: "Email must not be more than 40 characters long"})
   .trim(),

   password: z
   .string({required_error: "Password is required"})
   .min(8, {message: "Password must be at least 8 characters long"})
   .max(40, {message: "Password must not be more than 40 characters long"})
   .trim(),

   phoneNumber: z
   .number({required_error: "Phone number is required"})
   .min(10, {message: "Phone number must be at least 10 characters long"})
   

})