import axios, { AxiosError } from 'axios';
import { tokenStorage } from '@/shared/storage/tokenStorage';
import { authService } from '@/features/auth/service/AuthService';

export const httpClient = axios.create({
  baseURL: 'https://dummyjson.com/',
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

    // @ts-expect-error _retry not exists
    if (error.response?.status !== 401 || originalRequest?._retry || !originalRequest) {
      return Promise.reject(error);
    }

    // @ts-expect-error _retry not exists
    originalRequest._retry = true;

    await authService.refreshAuthSession();

    return httpClient(originalRequest);
  }
);
