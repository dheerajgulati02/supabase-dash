import * as z from 'zod';

export const formSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: 'Username must be at least 2 characters.',
    })
    .max(50, {
      message: 'Username must not exceed 50 characters.',
    }),
  password: z.string().min(6, {
    message: 'Password must be at least 6 characters.',
  }),
});
