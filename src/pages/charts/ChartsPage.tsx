import ChartCard from '@/features/Charts/ChartCard';
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
      <h2 className="text-2xl">Charts</h2>

      <div className="flex gap-2 flex-wrap">
        <ChartCard className="w-lg">
          <LineChartComponent />
        </ChartCard>
        <ChartCard className="w-lg">
          <BarChartComponent />
        </ChartCard>
      </div>
    </section>
  );
}
