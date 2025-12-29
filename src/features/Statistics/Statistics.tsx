import { CakeIcon, UserCircleIcon } from 'lucide-react';
import StatisticsCard from './components/StatisticsCard';
import { Badge } from '@/components/ui/badge';
import { useStatistics } from './hooks/useStatistics';
import { CountingNumber } from '@/components/animate-ui/primitives/texts/counting-number';

export default function Statistics() {
  const { data, isFetching } = useStatistics();

  if (isFetching) return '...Loading';

  return (
    <section className="grid gap-2">
      <h2 className="text-2xl">Users Stats</h2>
      <div className="flex gap-4 flex-wrap">
        <StatisticsCard Icon={CakeIcon} title="Median Age">
          <div className="flex gap-2 items-end">
            <span className="text-5xl">
              <CountingNumber number={data?.medianAge ?? 0} />
            </span>
            <span>years</span>
            <Badge variant="outline">+0.5%</Badge>
          </div>
        </StatisticsCard>
        <StatisticsCard Icon={UserCircleIcon} title="Users in system">
          <div className="flex gap-2 items-end">
            <span className="text-5xl">
              <CountingNumber number={data?.users ?? 0} />
            </span>
            <span>users</span>
            <Badge variant="success">+11.5%</Badge>
          </div>
        </StatisticsCard>
      </div>
    </section>
  );
}
