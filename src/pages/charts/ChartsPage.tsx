import ChartCard from '@/features/charts/ChartCard';
import { lazy } from 'react';

const LineChartComponent = lazy(
  () => import('@/features/charts/components/LineChart/LineChart')
);
const BarChartComponent = lazy(
  () => import('@/features/charts/components/BarChart/BarChart')
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
