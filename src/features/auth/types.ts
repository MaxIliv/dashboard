export type AuthPayload = {
  username: string;
  password: string;
}

export type AuthResponse = {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: 'male' | 'female';
  image: string;
  accessToken: string;
  refreshToken: string;
}
export type AuthService = {
  login: (e: AuthPayload) => Promise<AuthResponse>;
  logout: () => void;
  isAuthenticated: () => boolean;
}