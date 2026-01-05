import type {
  AuthPayload,
  AuthRefreshResponse,
  AuthResponse,
  AuthService,
} from '@/features/Auth/types';
import { httpClient } from '@/shared/api/httpClient';
import type { HTTPClient } from '@/shared/api/httpClient';
import { DEFAULT_EXPIRATION } from '../constant';
import { tokenStorage } from '@/shared/storage/tokenStorage';
import axios from 'axios';

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
      const refreshToken = tokenStorage.getRefreshToken();

      if (!refreshToken) {
        return await Promise.reject(new Error('No refresh token'));
      }

      const res = await axios.post<AuthRefreshResponse>('https://dummyjson.com/auth/refresh', {
        refreshToken,
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
