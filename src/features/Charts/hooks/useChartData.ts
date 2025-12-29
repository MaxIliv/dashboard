import { useQuery } from '@tanstack/react-query';
import { chartService } from '../service/ChartService';

export default function useChartData() {
  return useQuery({
    queryKey: ['users', 'chart'],
    queryFn: chartService.users,
  })
}