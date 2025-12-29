import { useQuery } from '@tanstack/react-query';
import { statisticsService } from '../service/StatisticsService';

export function useStatistics() {
  return useQuery({
    queryKey: ['users', 'stats'],
    queryFn: statisticsService.users
  })
}
