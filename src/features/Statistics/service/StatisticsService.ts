import { statsClient, type StatsClient } from '@/shared/api/statsClient';

type Statistics = {
  medianAge: number;
  eyeColor: string;
  averageHeight: number;
  averageEmailLength: number;
  users: number;
};

type StatisticsService = {
  users: () => Promise<Statistics>;
};
export function createStatisticsService(
  client: StatsClient = statsClient
): StatisticsService {
  return {
    users() {
      return client.get<Statistics>('/api/users/stats').then((res) => res.data);
    },
  };
}

export const statisticsService = createStatisticsService();
