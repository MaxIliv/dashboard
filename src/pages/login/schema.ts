import z from 'zod';

export const schema = z.object({
  username: z.string().min(1),
  password: z.string().min(6),
}).required();

export type LoginFormSchema = z.infer<typeof schema>