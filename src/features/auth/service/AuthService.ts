import type {
  AuthPayload,
  AuthRefreshResponse,
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

  const refreshAuthSession = async () => {
    try {
      const res = await client.post<AuthRefreshResponse>('/auth/refresh', {
        refreshToken: tokenStorage.getRefreshToken(),
      });

      tokenStorage.set({ ...res.data });
    } catch (err) {
      console.warn('failed to refresh', err);

      logout();
      window.location.reload();

      throw err;
    }
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
    refreshAuthSession,
    isAuthenticated,
  };
}

export const authService = createAuthService();
