import z from "zod";

export const updateProfileSchema = z
  .object({
    name: z.string().min(2).max(50),
    phoneNumber: z
      .string()
      .regex(
        /^(?:\+8801[3-9]\d{8}|01[3-9]\d{8})$/,
        "Invalid Bangladeshi phone number"
      )
      .min(10)
      .max(15),
    password: z.string().min(6, { error: "Password is too short" }),
    confirmPassword: z
      .string()
      .min(6, { error: "Confirm Password is too short" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password do not match",
    path: ["confirmPassword"],
  });
