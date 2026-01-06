import { httpClient, type HTTPClient } from '@/shared/api/httpClient';
import type { Me } from '../types';

type UserService = {
  me: () => Promise<Me>;
};

export function createUserService(
  client: HTTPClient = httpClient
): UserService {
  return {
    me() {
      return client.get<Me>('/auth/me').then((res) => res.data);
    },
  };
}

export const userService = createUserService();
