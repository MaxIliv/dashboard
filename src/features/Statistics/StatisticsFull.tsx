import {
  CakeIcon,
  EyeIcon,
  MailIcon,
  RulerIcon,
  UserCircleIcon,
  WeightIcon,
} from 'lucide-react';
import StatisticsCard, {
  type StatisticsCardProps,
} from './components/StatisticsCard';
import { Badge } from '@/components/ui/badge';
import { useStatisticsQuery } from './hooks/useStatistics';

export default function Statistics() {
  const { data } = useStatisticsQuery();

  const cards: StatisticsCardProps[] = [
    {
      Icon: CakeIcon,
      title: 'Median Age',
      value: data.medianAge,
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
      children: (
        <>
          <span>cm</span>
          <Badge variant="success">+1.5%</Badge>
        </>
      ),
    },
    {
      title: 'Average Weight',
      Icon: WeightIcon,
      value: data.averageWeight,
      children: (
        <>
          <span>kg</span>
          <Badge variant="outline">-1.5%</Badge>
        </>
      ),
    },
    {
      title: 'Average Email Length',
      Icon: MailIcon,
      value: data.averageEmailLength,
      children: (
        <>
          <span>chars</span>
          <Badge variant="outline">1.1%</Badge>
        </>
      ),
    },
    {
      title: 'Most Common Eye Color',
      Icon: EyeIcon,
      value: data.mostFrequentEyeColor,
      children: (
        <Badge variant="outline">{data.mostFrequentEyeColorCount} people</Badge>
      ),
    },
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 grid-wrap">
      {cards.map((item) => (
        <StatisticsCard {...item} />
      ))}
    </div>
  );
}
