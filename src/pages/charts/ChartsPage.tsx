import ChartCard from '@/features/Charts/components/ChartCard';
import { lazy } from 'react';

const LineChartComponent = lazy(
  () => import('@/features/Charts/components/LineChart/LineChart')
);
const BarChartComponent = lazy(
  () => import('@/features/Charts/components/BarChart/BarChart')
);

export default function ChartsPage() {
  return (
    <section className="grid gap-4">
      <h2 className="text-xl">Charts</h2>

      <div className="flex gap-4 flex-wrap">
        <ChartCard className="sm:flex-1 sm:min-w-md">
          <LineChartComponent />
        </ChartCard>
        <ChartCard className="sm:flex-1 sm:min-w-md">
          <BarChartComponent />
        </ChartCard>
      </div>
    </section>
  );
}
