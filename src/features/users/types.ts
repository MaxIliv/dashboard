export type Role = 'admin' | 'moderator' | 'user';

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: Role;
  birthDate: string;
  weight: number;
  height: number;
};