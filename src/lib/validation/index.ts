import { z } from "zod";

export const SignupValidation = z.object({
  name: z
    .string()
    .min(2, { message: "Very Short!! Please add more charcters" }),
  username: z
    .string()
    .min(2, { message: "Very Short!! Please add more charcters" }),
  email: z.string().email(),
  password: z.string().min(8, { message: "Add more than 8 charcters" }),
});
