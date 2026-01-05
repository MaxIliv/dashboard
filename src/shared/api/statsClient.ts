import axios from 'axios';

export const statsClient = axios.create({
  baseURL: import.meta.env.VITE_STATS_API_ENDPOINT,
});

export type StatsClient = typeof statsClient;