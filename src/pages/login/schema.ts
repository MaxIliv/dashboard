import z from 'zod';

export const schema = z.object({
  username: z.string().min(1),
  password: z.string().min(6, 'Password should be at least 6 characters long'),
});

export type LoginFormSchema = z.infer<typeof schema>