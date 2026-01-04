import { CakeIcon, MailIcon, RulerIcon, UserCircleIcon } from 'lucide-react';
import StatisticsCard, {
  type StatisticsCardProps,
} from './components/StatisticsCard';
import { Badge } from '@/components/ui/badge';
import { useStatisticsQuery } from './hooks/useStatistics';

export default function MainStatistics() {
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
  ];

  return (
    <div className="flex gap-4">
      {cards.map((item) => (
        <StatisticsCard {...item} />
      ))}
    </div>
  );
}
