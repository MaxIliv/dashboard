import { useSuspenseQuery } from '@tanstack/react-query';
import { statisticsService } from '../service/StatisticsService';

export function useStatistics() {
  return useSuspenseQuery({
    queryKey: ['users', 'stats'],
    queryFn: statisticsService.users
  })
}
