import { useSuspenseQuery } from '@tanstack/react-query';
import { chartService } from '../service/ChartService';

export default function useChartData() {
  return useSuspenseQuery({
    queryKey: ['users', 'chart'],
    queryFn: chartService.users,
  })
}