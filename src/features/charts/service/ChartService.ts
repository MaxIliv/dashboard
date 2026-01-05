import { statsClient, type StatsClient } from '@/shared/api/statsClient';
import type { ChartData } from '../types';

type ChartService = {
  users: () => Promise<ChartData>;
};

export function createChartService(
  client: StatsClient = statsClient
): ChartService {
  return {
    users() {
      return client.get<ChartData>('/api/users/chart').then((res) => res.data);
    },
  };
}

export const chartService = createChartService();
