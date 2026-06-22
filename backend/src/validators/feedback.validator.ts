import { z } from "zod";

export const createFeedbackSchema = z.object({
  categoryId: z.string().uuid(),

  name: z.string().optional(),

  email: z.string().email().optional(),

  comment: z
    .string()
    .min(10)
    .max(1000),
});