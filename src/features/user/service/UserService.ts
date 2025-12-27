import type { AuthResponse } from '@/features/auth/types';
import { httpClient, type HTTPClient } from '@/shared/api/httpClient';

type UserService = {
  me: () => Promise<AuthResponse>;
};

export function createUserService(
  client: HTTPClient = httpClient
): UserService {
  return {
    me() {
      return client.get<AuthResponse>('/auth/me').then((res) => res.data);
    },
  };
}

export const userService = createUserService();
