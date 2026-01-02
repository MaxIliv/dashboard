import { CakeIcon, RulerIcon, UserCircleIcon } from 'lucide-react';
import StatisticsCard from './components/StatisticsCard';
import { Badge } from '@/components/ui/badge';
import { useStatistics } from './hooks/useStatistics';
import { CountingNumber } from '@/components/animate-ui/primitives/texts/counting-number';

export default function MainStatistics() {
  const { data } = useStatistics();

  return (
    <div className="flex gap-4 flex-wrap">
      <StatisticsCard Icon={CakeIcon} title="Median Age">
        <div className="flex gap-2 items-end">
          <span className="text-5xl">
            <CountingNumber number={data.medianAge} />
          </span>
          <span>years</span>
          <Badge variant="outline">+0.5%</Badge>
        </div>
      </StatisticsCard>
      <StatisticsCard Icon={UserCircleIcon} title="Users in system">
        <div className="flex gap-2 items-end">
          <span className="text-5xl">
            <CountingNumber number={data.users} />
          </span>
          <span>users</span>
          <Badge variant="success">+11.5%</Badge>
        </div>
      </StatisticsCard>
      <StatisticsCard Icon={RulerIcon} title="Average Height">
        <div className="flex gap-2 items-end">
          <span className="text-5xl">
            <CountingNumber number={data.averageHeight} />
          </span>
          <span>cm</span>
          <Badge variant="success">+1.5%</Badge>
        </div>
      </StatisticsCard>
      <StatisticsCard Icon={RulerIcon} title="Average Email Length">
        <div className="flex gap-2 items-end">
          <span className="text-5xl">
            <CountingNumber number={data.averageEmailLength} />
          </span>
          <span>chars</span>
          <Badge variant="outline">1.1%</Badge>
        </div>
      </StatisticsCard>
    </div>
  );
}
