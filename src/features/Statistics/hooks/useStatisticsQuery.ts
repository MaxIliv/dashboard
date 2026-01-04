import { useSuspenseQuery } from '@tanstack/react-query';
import { statisticsService } from '../service/StatisticsService';

export function useStatisticsQuery() {
  return useSuspenseQuery({
    queryKey: ['users', 'stats'],
    queryFn: statisticsService.users
  })
}
