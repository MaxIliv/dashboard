import {
  CakeIcon,
  EyeIcon,
  MailIcon,
  RulerIcon,
  UserCircleIcon,
  WeightIcon,
} from 'lucide-react';
import type { StatisticsCardProps } from '../components/StatisticsCard';
import { useStatisticsQuery } from './useStatisticsQuery';
import { Badge } from '@/components/ui/badge';
import { useMemo } from 'react';

export default function useStats() {
  const { data } = useStatisticsQuery();

  const stats: StatisticsCardProps[] = [
    {
      Icon: CakeIcon,
      title: 'Median Age',
      value: data.medianAge,
      description:
        'Median age of users calculated as middle value, not average',
      children: (
        <>
          <span>years</span>
          <Badge variant="outline">+0.5%</Badge>
        </>
      ),
    },
    {
      title: 'Users in system',
      Icon: UserCircleIcon,
      value: data.users,
      description: 'Well, this is how many users in the system at the moment',
      children: (
        <>
          <span>users</span>
          <Badge variant="success">+11.5%</Badge>
        </>
      ),
    },
    {
      title: 'Average Height',
      Icon: RulerIcon,
      value: data.averageHeight,
      description: 'Yes, our users have a really good average height.',
      children: (
        <>
          <span>cm</span>
          <Badge variant="success">+1.5%</Badge>
        </>
      ),
    },
    {
      title: 'Average Email Length',
      Icon: MailIcon,
      value: data.averageEmailLength,
      description: 'Hopefully we are gonna need this',
      children: (
        <>
          <span>chars</span>
          <Badge variant="outline">1.1%</Badge>
        </>
      ),
    },
    {
      title: 'Average Weight',
      Icon: WeightIcon,
      value: data.averageWeight,
      description: 'Yes, our users are pretty fit!.',
      children: (
        <>
          <span>kg</span>
          <Badge variant="outline">-0.5%</Badge>
        </>
      ),
    },
    {
      title: 'Most Common Eye Color',
      Icon: EyeIcon,
      value: data.mostFrequentEyeColor,
      description: 'Wow, look at those eyes',
      children: (
        <Badge variant="outline">{data.mostFrequentEyeColorCount} people</Badge>
      ),
    },
  ];

  const mainStats = useMemo(() => stats.slice(0, 4), [stats]);

  return { stats, mainStats };
}
