import axios from 'axios'
import { tokenStorage } from '@/shared/storage/tokenStorage';

export const httpClient = axios.create({
  baseURL: 'https://dummyjson.com/',
})

export type HTTPClient = typeof httpClient;

httpClient.interceptors.request.use(config => {
  const token = tokenStorage.get()
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})