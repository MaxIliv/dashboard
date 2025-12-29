import axios, { AxiosError } from 'axios';
import { tokenStorage } from '@/shared/storage/tokenStorage';
import { authService } from '@/features/auth/service/AuthService';

export const httpClient = axios.create({
  baseURL: import.meta.env.VITE_USERS_API_ENDPOINT,
});

export type HTTPClient = typeof httpClient;

httpClient.interceptors.request.use((config) => {
  const token = tokenStorage.get();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

httpClient.interceptors.response.use(
  (res) => res,
  async (error: AxiosError) => {
    const originalRequest = error.config;

    if (
      !originalRequest ||
      error.response?.status !== 401 ||
      // @ts-expect-error _retry not exists
      originalRequest._retry
    ) {
      return Promise.reject(error);
    }

    // @ts-expect-error _retry not exists
    originalRequest._retry = true;

    const refreshToken = tokenStorage.getRefreshToken();

    if (!refreshToken) return Promise.reject(error);

    try {
      await authService.refreshAuthSession();
      const newToken = tokenStorage.get();

      originalRequest.headers.Authorization = `Bearer ${newToken!}`;

      return await httpClient(originalRequest);
    } catch (e) {
      return Promise.reject(e as Error);
    }
  }
);
