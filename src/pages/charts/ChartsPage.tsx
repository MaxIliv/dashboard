import { BarChartComponent } from '@/features/Charts/BarChart/BarChart';
import ChartCard from '@/features/Charts/ChartCard';
import { LineChartComponent } from '@/features/Charts/LineChart/LineChart';

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
