import ChartCard from '@/features/Charts/ChartCard';
import { LineChartComponent } from '@/features/Charts/LineChart/LineChart';
import CardLoader from '@/features/Statistics/components/CardLoader';
import MainStatistics from '@/features/Statistics/MainStatistics';
import RecentUsers from '@/features/Users/RecentUsers';
import { Suspense } from 'react';

export default function Home() {
  return (
    <section className="grid gap-8">
      <section>
        <h2 className="text-xl mb-4">Users Statistics</h2>

        <Suspense fallback={<CardLoader />}>
          <MainStatistics />
        </Suspense>
      </section>

      <section>
        <h2 className="text-xl mb-4">Users Chart</h2>

        <ChartCard className="w-1/2">
          <LineChartComponent />
        </ChartCard>
      </section>

      <section>
        <h2 className="text-xl mb-4">Recent Users</h2>
        <RecentUsers />
      </section>
    </section>
  );
}
