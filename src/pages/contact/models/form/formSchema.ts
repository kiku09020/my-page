import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(1).max(64),
  email: z.string().email(),
  message: z.string().min(1).max(2048),
});

export type FormData = z.infer<typeof formSchema>;
