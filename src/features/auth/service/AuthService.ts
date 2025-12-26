import type {
  AuthPayload,
  AuthResponse,
  AuthService,
} from '@/features/auth/types';
import { httpClient } from '@/shared/api/httpClient';
import type { HTTPClient } from '@/shared/api/httpClient';
import { DEFAULT_EXPIRATION } from '../constant';
import { tokenStorage } from '@/shared/storage/tokenStorage';

export function createAuthService(
  client: HTTPClient = httpClient
): AuthService {
  const login = ({
    username,
    password,
  }: AuthPayload): Promise<AuthResponse> => {
    return client
      .post<AuthResponse>('/auth/login', {
        username,
        password,
        expiresInMins: DEFAULT_EXPIRATION,
      })
      .then((res) => {
        tokenStorage.set({
          accessToken: res.data.accessToken,
          refreshToken: res.data.refreshToken,
        });

        return res.data;
      });
  };

  const logout = () => {
    tokenStorage.clear();
  };

  const isAuthenticated = () => {
    return Boolean(tokenStorage.get());
  };

  return {
    login,
    logout,
    isAuthenticated,
  };
}

export const authService = createAuthService();
